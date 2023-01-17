import { Injectable } from '@nestjs/common';
import { CreateReviewerDto } from './dto/create-reviewer.dto';
import { UpdateReviewerDto } from './dto/update-reviewer.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ReviewersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createReviewerDto: CreateReviewerDto) {
    return this.prisma.reviewers.create({
      data: createReviewerDto,
    });
  }

  findAll() {
    return this.prisma.reviewers.findMany();
  }

  findOne(id: string) {
    return this.prisma.reviewers.findUnique({
      where: { id },
    });
  }

  update(id: string, updateReviewerDto: UpdateReviewerDto) {
    return this.prisma.reviewers.update({
      where: { id },
      data: updateReviewerDto,
    });
  }

  remove(id: string) {
    return this.prisma.reviewers.delete({
      where: { id },
    });
  }
}
