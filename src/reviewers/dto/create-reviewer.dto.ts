import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsDate,
  IsArray,
  IsOptional,
} from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreateReviewerDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  price?: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  description?: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  photo?: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  time?: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  stock?: string;

  @IsDate()
  @IsOptional()
  @MinLength(2)
  created_at?: Date;

  @IsDate()
  @IsOptional()
  @MinLength(2)
  updated_at?: Date;

  @IsArray()
  @IsNotEmpty()
  @MinLength(2)
  Permissions: Permissions[];

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  Faq: Prisma.FilesCreateNestedManyWithoutReviewersInput;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  Photos: Prisma.FilesCreateNestedManyWithoutReviewersInput;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  Reviewers: Prisma.FilesCreateNestedManyWithoutReviewersInput;
}
