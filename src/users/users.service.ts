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
    const { name, email, number, password } = createUserDto;

    const user = await this.prismaService.users.findFirst({ where: { email } });
    const { id: userRoleId } = await this.prismaService.roles.findFirst({
      where: { name: 'USER' },
    });

    if (user) throw new EmailAlreadyRegistered();

    const enctyptedPassword = await hash(password, 8);

    return this.prismaService.users
      .create({
        data: {
          name,
          email,
          number: number || 'Não informado',
          password: await hash(password, 8),
          userRole: {
            create: {
              role_id: userRoleId,
            },
          },
        },
      })
      .then((user) => {
        delete user.password;

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

  findOne(id: number) {
    return `This action returns a #${id} user`;
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

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
