import { IsNotEmpty, IsString } from 'class-validator';

export class VerificationTokenPayload {
  @IsString()
  @IsNotEmpty()
  email: string;
}
