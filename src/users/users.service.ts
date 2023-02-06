import { NodemailerService } from '@/nodemailer/nodemailer.service';
import { PrismaService } from '@/prisma/prisma.service';
import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAddressDTO } from './dto/create-address.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

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
