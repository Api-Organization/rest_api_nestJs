import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from '@/prisma/prisma.service';
@Injectable()
export class RequestsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createRequestDto: CreateRequestDto) {
    const { url, method, status, tools, description } = createRequestDto;
    const request = this.prismaService.requests.create({
      data: {
        url,
        method,
        status: status,
        tools,
        description,
      },
    });
    return request;
  }

  findAll() {
    return `This action returns all requests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
