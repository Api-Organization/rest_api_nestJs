import { BadRequestException, Injectable } from '@nestjs/common';
import { NodemailerService } from '../nodemailer/nodemailer.service';
import { JwtService } from '@nestjs/jwt';
import { VerificationTokenPayload } from './dto/verification-token-payload.dto';
import { UsersService } from '@/users/users.service';

@Injectable()
export class EmailConfirmationService {
  constructor(
    private readonly emailService: NodemailerService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async sendVerificationLink(email: string) {
    const payload: VerificationTokenPayload = { email };
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_VERIFICATION_TOKEN_SECRET,
      expiresIn: `${process.env.JWT_VERIFICATION_TOKEN_EXPIRATION_TIME}s`,
    });

    const subject = 'Confirmação de email';
    const mensagem = 'Clique no link para confirmar seu email';

    const url = `${process.env.EMAIL_CONFIRMATION_URL}?token=${token}`;

    const text = `Welcome to the application. To confirm the email address, click here: ${url}`;

    return this.emailService.sendEmail({
      to: 'suporte@adheart.com.br',
      subject: 'Email confirmation',
      mensagem: text,
    });
  }

  async confirmEmail(email: string) {
    const user = await this.usersService.getByEmail(email);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await this.usersService.markEmailAsConfirmed(email);
  }

  async decodeConfirmationToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_VERIFICATION_TOKEN_SECRET,
      });

      if (typeof payload === 'object' && 'email' in payload) {
        return payload.email;
      }
      throw new BadRequestException();
    } catch (error) {
      if (error?.name === 'TokenExpiredError') {
        throw new BadRequestException('Email confirmation token expired');
      }
      throw new BadRequestException('Bad confirmation token');
    }
  }

  async resendConfirmationLink(userId: string) {
    const user = await this.usersService.findOne(userId);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await this.sendVerificationLink(user.email);
  }
}
