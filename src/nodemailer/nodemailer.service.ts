import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class NodemailerService {
  constructor(private mailerService: MailerService) {}

  async sendEmail({ to, subject, mensagem, template }: SendEmailDto) {
    const response = await this.mailerService.sendMail({
      to,
      from: 'suporte@adheart.com.br',
      subject,
      template: template,
      context: { ...mensagem },
    });

    return response;
  }
}
