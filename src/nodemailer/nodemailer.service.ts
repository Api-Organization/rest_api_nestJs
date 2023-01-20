import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class NodemailerService {
  constructor(private mailerService: MailerService) {}

  async sendEmail({ to, subject, mensagem }: SendEmailDto) {
    const response = await this.mailerService.sendMail({
      to,
      from: '',
      subject,
      html: `<h3 style="color: red">${mensagem}</h3>`,
    });

    return true;
  }
}
