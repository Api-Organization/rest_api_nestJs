import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Req, UseGuards } from '@nestjs/common/decorators';
import { AccessTokenGuard } from '@/common/guards/accessToken.guard';
import { PermissionGuard } from '@/common/guards/permission.guard';
import { Request } from 'express';
import { EmailConfirmationService } from '@/email-confirmation/email-confirmation.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // @UseGuards(AccessTokenGuard, PermissionGuard(['products_get', 'adheart_get']))
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AccessTokenGuard)
  @Get('me')
  async findOne(@Req() req: Request) {
    const userId = req.user['sub'];
    const user = await this.usersService.findOne(userId);
    // const email = await this.emailConfirmationService.sendVerificationLink(
    //   user.email,
    // );
    return { user };
  }

  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  // @UseGuards(AccessTokenGuard)
  // @Delete(':id')
  // async remove(@Param('id') id: string, @Req() req: Request) {
  //   const userId = req.user['sub'];
  //   console.log(await this.usersService.isAdmin(userId));
  //   return true;
  //   return this.usersService.remove(id);
  // }
}
