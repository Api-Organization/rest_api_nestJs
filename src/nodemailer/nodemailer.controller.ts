import { Controller, Body, Post } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller('nodemailer')
export class NodemailerController {
  constructor(private readonly nodemailerService: NodemailerService) {}

  @Post('send-email')
  sendEmail(@Body() body: SendEmailDto) {
    return this.nodemailerService.sendEmail(body);
  }
}
