import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAddressDTO {
  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  postal_code: string;

  @IsNotEmpty()
  @IsString()
  street_address: string;
}
