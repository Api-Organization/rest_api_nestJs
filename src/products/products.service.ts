import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return await this.prismaService.products.create({
      data: createProductDto,
    });
  }

  async findAll() {
    return await this.prismaService.products.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.products.findUnique({ where: { id } });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.prismaService.products.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    return await this.prismaService.products.delete({ where: { id } });
  }
}
