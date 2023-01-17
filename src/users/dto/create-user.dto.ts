import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsOptional,
  IsEmpty,
} from 'class-validator';
import { Permissions } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  number?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  password: string;

  @IsOptional()
  @IsString()
  refresh_Token?: string;

  @IsEmpty()
  permissions?: unknown;
}
