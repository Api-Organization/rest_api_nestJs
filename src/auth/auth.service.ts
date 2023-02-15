import { PrismaService } from '@/prisma/prisma.service';
import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UsersService } from '@/users/users.service';
import {
  ConflictException,
  Injectable,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth';
import * as argon2 from 'argon2';
import { Permissions } from '@prisma/client';
import { NodemailerService } from '@/nodemailer/nodemailer.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly prismaService: PrismaService,
    private readonly nodemailerService: NodemailerService,
    private readonly jwtService: JwtService,
  ) {}

  hashData(data: string) {
    return argon2.hash(data);
  }

  async getTokens(userId: string, permissions: Array<Permissions>) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, permissions },
        { expiresIn: '15m', secret: process.env.JWT_ACCESS_SECRET },
      ),
      this.jwtService.signAsync(
        { sub: userId, permissions },
        { expiresIn: '7d', secret: process.env.JWT_REFRESH_SECRET },
      ),
    ]);

    return { accessToken, refreshToken };
  }

  async refreshToken(userId: string, refreshToken: string) {
    const user = await this.prismaService.users.findUnique({
      where: { id: userId },
      include: {
        permissions: true,
      },
    });

    if (!user || !user.refresh_Token) {
      throw new ForbiddenException('Access Denied');
    }

    const refreshTokenMatches = await argon2.verify(
      user.refresh_Token,
      refreshToken,
    );

    if (!refreshTokenMatches) {
      throw new ForbiddenException('Access Denied');
    }

    const tokens = await this.getTokens(user.id, user.permissions);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);

    await this.prismaService.users.update({
      where: { id: userId },
      data: {
        refresh_Token: hashedRefreshToken,
      },
    });
  }

  async signUp(createUserDto: CreateUserDto) {
    const user = await this.prismaService.users.findUnique({
      where: { email: createUserDto.email },
    });

    if (user) throw new ConflictException('This email is already registered.');

    const randomPassword = Math.random().toString(36).slice(-8);

    const encryptedPassword = await this.hashData(
      createUserDto.password || randomPassword,
    );

    const permission = await this.prismaService.permissions.findFirst({
      where: { name: 'get_products' },
    });

    const createdUser = await this.usersService.create({
      ...createUserDto,
      permissions: {
        connect: {
          id: permission.id,
        },
      },
      password: encryptedPassword,
    });

    const tokens = await this.getTokens(
      createdUser.id,
      createdUser.permissions,
    );
    await this.updateRefreshToken(createdUser.id, tokens.refreshToken);

    if (!createUserDto.password) {
      await this.nodemailerService.sendEmail({
        to: createUserDto.email,
        subject: 'Sua senha',
        mensagem: {
          name: createUserDto.name,
          client_password: randomPassword,
          client_email: createUserDto.email,
        },
        template: 'welcome',
      });
    } else {
      await this.nodemailerService.sendEmail({
        to: createUserDto.email,
        subject: 'Bem vindo ao webspy',
        mensagem: {
          nome: createUserDto.name,
          email: createUserDto.email,
        },
        template: 'index',
      });
    }

    return tokens;
  }

  async signIn(authDto: AuthDto) {
    const user = await this.prismaService.users.findUnique({
      where: { email: authDto.email },
      include: {
        permissions: true,
      },
    });

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    const passwordMatches = await argon2.verify(
      user.password,
      authDto.password,
    );

    if (!passwordMatches) {
      throw new BadRequestException('Password is incorrect');
    }

    const permissionsClean: any = user.permissions.map((permission) => {
      return { name: permission.name, id: permission.id };
    });

    const tokens = await this.getTokens(user.id, permissionsClean);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async logout(userId: string) {
    this.prismaService.users.update({
      where: { id: userId },
      data: {
        refresh_Token: null,
      },
    });
  }
}
