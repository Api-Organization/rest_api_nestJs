import { NodemailerService } from '@/nodemailer/nodemailer.service';
import { PrismaService } from '@/prisma/prisma.service';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateAddressDTO } from './dto/create-address.dto';
import { UpdateUserPermissionDto } from './dto/Update-user-permission.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon2 from 'argon2';
import { AuthService } from '@/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
    private readonly nodemailerService: NodemailerService,
  ) {}

  async createAddress(userId: string, createAddress: CreateAddressDTO) {
    const address = await this.prismaService.users
      .findUnique({
        include: {
          Address: true,
        },
        where: { id: userId },
      })
      .then((res) => res.Address);

    if (address.length > 0)
      throw new ConflictException('Address already created.');

    return this.prismaService.address.create({
      data: {
        city: createAddress.city,
        country: createAddress.country,
        line1: createAddress.street_address,
        postal_code: createAddress.postal_code,
        state: createAddress.state,
        Users: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async create(createUserDto: CreateUserDto) {
    const { refresh_Token, ...userDto } = createUserDto;

    return this.prismaService.users.create({
      data: userDto,
      include: {
        permissions: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.users
      .findUnique({
        where: { id },
        include: {
          permissions: {
            select: {
              name: true,
              Products: true,
            },
          },
          Payments: {
            include: {
              products: true,
            },
          },
        },
      })
      .then((user) => {
        delete user.password;
        delete user.refresh_Token;

        return user;
      });
  }

  async findAll(skip: number, take: number) {
    const [users, total] = await this.prismaService.$transaction([
      this.prismaService.users.findMany({ skip, take }),
      this.prismaService.users.count(),
    ]);

    const totalPage = Math.ceil(total / take);

    const usersWithoutPassword = users.map((user) => {
      delete user.password;
      delete user.refresh_Token;

      return user;
    });

    return { total, totalPage, users: usersWithoutPassword };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.users
      .update({
        where: { id },
        data: {
          name: updateUserDto.name,
          email: updateUserDto.email,
          number: updateUserDto.number,
          permissions: {
            connect: {
              id: updateUserDto.permission_id,
            },
          },
        },
      })
      .then((user) => {
        delete user.password;

        return user;
      });
  }

  async remove(id: string) {
    return this.prismaService.users.delete({
      where: { id },
    });
  }

  async getByEmail(email: string) {
    return this.prismaService.users
      .findUnique({
        where: { email },
      })
      .then((user) => {
        delete user.password;
        delete user.refresh_Token;

        return user;
      });
  }

  async markEmailAsConfirmed(email: string) {
    return this.prismaService.users.update({
      where: { email },
      data: { isEmailConfirmed: true },
    });
  }

  async removePermission(
    id: string,
    UpdateUserPermissionDto: UpdateUserPermissionDto,
  ) {
    return this.prismaService.users.update({
      where: { id },
      data: {
        permissions: {
          disconnect: { id: UpdateUserPermissionDto.permission_id },
        },
      },
    });
  }

  async removeAllPermissions(id: string) {
    return this.prismaService.users.update({
      where: { id },
      data: {
        permissions: {
          set: [],
        },
      },
      include: {
        permissions: true,
      },
    });
  }

  async changePassword(id: string, oldPassword: string, newPassword: string) {
    const user = await this.prismaService.users.findUnique({
      where: { id },
      include: {
        permissions: true,
      },
    });

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    const passwordMatches = await argon2.verify(user.password, oldPassword);

    if (!passwordMatches) {
      throw new BadRequestException('Password is incorrect');
    }

    return this.prismaService.users.update({
      where: { id },
      data: {
        password: newPassword,
      },
    });
  }

  async forgotPassword(email: string) {
    const user = await this.prismaService.users.findUnique({
      where: { email },
      include: {
        permissions: true,
      },
    });

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    const permissionsClean: any = user.permissions.map((permission) => {
      return { name: permission.name, id: permission.id };
    });

    const tokens = await this.authService.getTokens(user.id, permissionsClean);
    await this.authService.updateRefreshToken(user.id, tokens.refreshToken);

    const forgotLink = `https://api.webspy.com.br/reset-password?token=${tokens.accessToken}`;

    await this.nodemailerService.sendEmail(email);

    return tokens;
  }
}
