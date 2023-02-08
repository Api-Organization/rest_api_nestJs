import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class UpdateUserPermissionDto {
  @IsOptional()
  @IsString()
  permission_id?: string;
}
