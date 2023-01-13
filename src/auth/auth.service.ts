import { PrismaService } from '@/prisma/prisma.service';
import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UsersService } from '@/users/users.service';
import {
  ConflictException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from 'bcryptjs';
import { AuthDto } from './dtos/auth';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const user = await this.prismaService.users.findFirst({
      where: { email: createUserDto.email },
    });

    if (user) throw new ConflictException('This email is already registered.');

    const encryptedPassword = await this.hashData(createUserDto.password);

    const newUser = await this.usersService.create({
      ...createUserDto,
      password: encryptedPassword,
    });

    const tokens = await this.getTokens(newUser.id, newUser.name);
    await this.updateRefreshToken(newUser.id, tokens.refreshToken);

    return tokens;
  }

  async signIn(authDto: AuthDto) {
    const user = await this.prismaService.users.findUnique({
      where: { email: authDto.email },
    });
    if (!user) throw new BadRequestException('User does not exist');
    const passwordMatches = await argon2.verify(
      user.password,
      authDto.password,
    );
    if (!passwordMatches)
      throw new BadRequestException('Password is incorrect');
    const tokens = await this.getTokens(user.id, user.name);
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

  hashData(data: string) {
    return argon2.hash(data);
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

  async getTokens(userId: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email },
        { expiresIn: '15m', secret: process.env.SECRET },
      ),
      this.jwtService.signAsync(
        { sub: userId, email },
        { expiresIn: '7d', secret: process.env.SECRET },
      ),
    ]);

    return { accessToken, refreshToken };
  }
}
