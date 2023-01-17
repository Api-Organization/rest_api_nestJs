import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private readonly PrismaService: PrismaService) {}

  create(createAccountDto: CreateAccountDto) {
    return this.PrismaService.accounts.create({
      data: createAccountDto,
    });
  }

  findAll() {
    return this.PrismaService.accounts.findMany();
  }

  findOne(id: string) {
    return this.PrismaService.accounts.findUnique({
      where: { id },
    });
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.PrismaService.accounts.update({
      where: { id },
      data: updateAccountDto,
    });
  }

  remove(id: string) {
    return this.PrismaService.accounts.delete({
      where: { id },
    });
  }
}
