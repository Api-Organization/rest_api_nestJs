import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class FaqService {
  constructor(private readonly PrismaService: PrismaService) {}

  create(createFaqDto: CreateFaqDto) {
    return this.PrismaService.faq.create({
      data: createFaqDto,
    });
  }

  findAll() {
    return this.PrismaService.faq.findMany();
  }

  findOne(id: string) {
    return this.PrismaService.faq.findUnique({
      where: { id },
    });
  }

  update(id: string, updateFaqDto: UpdateFaqDto) {
    return this.PrismaService.faq.update({
      where: { id },
      data: updateFaqDto,
    });
  }

  remove(id: string) {
    return this.PrismaService.faq.delete({
      where: { id },
    });
  }
}
