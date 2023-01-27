import { NodemailerService } from '@/nodemailer/nodemailer.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { truncate } from 'fs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EmailAlreadyRegistered } from './exceptions/email-already-registered';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly nodemailerService: NodemailerService,
  ) {}

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

  async findAll() {
    return await this.prismaService.users.findMany().then((users) =>
      users.map((user) => {
        delete user.password;

        return user;
      }),
    );
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.users
      .update({
        where: { id },
        data: {
          name: updateUserDto.name,
          email: updateUserDto.email,
          number: updateUserDto.number,
        },
      })
      .then((user) => {
        delete user.password;

        return user;
      });
  }

  remove(id: string) {
    return this.prismaService.users.delete({
      where: { id },
    });
  }

  async getByEmail(email: string) {
    return this.prismaService.users.findUnique({
      where: { email },
    });
  }

  async markEmailAsConfirmed(email: string) {
    return this.prismaService.users.update({
      where: { email },
      data: { isEmailConfirmed: true },
    });
  }
}
