import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  password: string;
}
