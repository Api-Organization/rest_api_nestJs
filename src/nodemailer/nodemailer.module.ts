import { Module } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import { NodemailerController } from './nodemailer.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.hostinger.com', //host smtp
        secure: true, //regras de segurança do serviço smtp
        port: 465, // porta
        auth: {
          //dados do usuário e senha
          user: 'suporte@adheart.com.br',
          pass: '@Souumbbk1',
        },
        ignoreTLS: true,
      },
      defaults: {
        // configurações que podem ser padrões
        from: '"',
      },
      template: {
        dir: `${process.cwd()}/src/views`,
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [NodemailerController],
  providers: [NodemailerService],
  exports: [NodemailerService],
})
export class NodemailerModule {}
