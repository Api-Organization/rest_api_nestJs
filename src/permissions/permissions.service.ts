import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class PermissionsService {
  constructor(private readonly PrismaService: PrismaService) {}

  create(createPermissionDto: CreatePermissionDto) {
    return this.PrismaService.permissions.create({
      data: createPermissionDto,
    });
  }

  findAll() {
    return this.PrismaService.permissions.findMany();
  }

  findOne(id: string) {
    return this.PrismaService.permissions.findUnique({
      where: { id },
    });
  }

  update(id: string, updatePermissionDto: UpdatePermissionDto) {
    return this.PrismaService.permissions.update({
      where: { id },
      data: updatePermissionDto,
    });
  }

  remove(id: string) {
    return this.PrismaService.permissions.delete({
      where: { id },
    });
  }
}
