import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EmailAlreadyRegistered } from './exceptions/email-already-registered';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { refresh_Token, ...userDto } = createUserDto;

    return this.prismaService.users.create({
      data: userDto,
    });
    // const { name, email, number, password } = createUserDto;

    // const user = await this.prismaService.users.findFirst({ where: { email } });
    // const { id: userRoleId } = await this.prismaService.roles.findFirst({
    //   where: { name: 'USER' },
    // });

    // if (user) throw new EmailAlreadyRegistered();

    // const enctyptedPassword = await hash(password, 8);

    // return this.prismaService.users
    //   .create({
    //     data: {
    //       name,
    //       email,
    //       number: number || 'Não informado',
    //       password: enctyptedPassword,
    //       userRole: {
    //         create: {
    //           role_id: userRoleId,
    //         },
    //       },
    //     },
    //   })
    //   .then((user) => {
    //     delete user.password;

    //     return user;
    //   });
  }

  findAll(body, headers) {
    return { body, headers };
  }

  findOne(id: string) {
    return this.prismaService.users
      .findUnique({ where: { id } })
      .then((user) => {
        delete user.password;
        delete user.refresh_Token;

        return user;
      });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
