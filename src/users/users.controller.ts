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
import { Query, Req, UseGuards } from '@nestjs/common/decorators';
import { AccessTokenGuard } from '@/common/guards/accessToken.guard';
import { Request } from 'express';
import { EmailConfirmationService } from '@/email-confirmation/email-confirmation.service';
import { CreateAddressDTO } from './dto/create-address.dto';
import { UpdateUserPermissionDto } from './dto/Update-user-permission.dto';
import { PermissionGuard } from '@/common/guards/permission.guard';

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

  @Post('permissions/:id')
  async removePermissions(
    @Param('id') id: string,
    @Body() UpdateUserPermissionDto: UpdateUserPermissionDto,
  ) {
    return this.usersService.removePermission(id, UpdateUserPermissionDto);
  }
  @Post('permissions/remove_all/:id')
  async removeAllPermissions(@Param('id') id: string) {
    return this.usersService.removeAllPermissions(id);
  }

  @UseGuards(AccessTokenGuard)
  @Post('create-address')
  createAddress(
    @Req() req: Request,
    @Body() createAddressDto: CreateAddressDTO,
  ) {
    const userId = req.user['sub'];
    return this.usersService.createAddress(userId, createAddressDto);
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['get_users']))
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll(@Query() query: any) {
    const skip = query.skip ? Number(query.skip) : 0;
    const take = query.take ? Number(query.take) : 40;
    return this.usersService.findAll(skip, take);
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
  @Get('email/:email')
  async findEmail(@Param('email') email: string) {
    const user = await this.usersService.getByEmail(email);

    console.log(user, email);

    return user;
  }

  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOneUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);

    // const email = await this.emailConfirmationService.sendVerificationLink(
    //   user.email,
    // );

    return user;
  }

  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @UseGuards(AccessTokenGuard)
  @Patch('change-password')
  async changePassword(@Req() req: Request, @Body() body: any) {
    const userId = req.user['sub'];
    const { oldPassword, newPassword } = body;
    return this.usersService.changePassword(userId, oldPassword, newPassword);
  }

  @UseGuards(AccessTokenGuard)
  @Patch('forgot-password')
  async forgotPassword(@Body() body: any) {
    const { email } = body;
    return this.usersService.forgotPassword(email);
  }
}
