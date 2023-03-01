import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateUserDeviceLimitDto {
  @IsNotEmpty()
  @IsNumber()
  device_limit: number;
}
