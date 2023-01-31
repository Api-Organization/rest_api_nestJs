import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionGuard } from '@/common/guards/permission.guard';
import { AccessTokenGuard } from '@/common/guards/accessToken.guard';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @UseGuards(AccessTokenGuard, PermissionGuard(['create_permissions']))
  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['get_permissions']))
  @Get()
  findAll() {
    return this.permissionsService.findAll();
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['get_permissions']))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(id);
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['update_permissions']))
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return this.permissionsService.update(id, updatePermissionDto);
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['delete_permissions']))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionsService.remove(id);
  }
}
