import { Body, Controller, Post, Req } from '@nestjs/common';
import { ConfirmEmailDto } from './dto/confirmEmail.dto';
import { EmailConfirmationService } from './email-confirmation.service';

@Controller('email-confirmation')
export class EmailConfirmationController {
  constructor(
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}

  @Post('confirm')
  async confirm(@Body() confirmEmailDto: ConfirmEmailDto) {
    const email = await this.emailConfirmationService.decodeConfirmationToken(
      confirmEmailDto.token,
    );
    await this.emailConfirmationService.confirmEmail(email);
  }

  // @Post('resend-confirmation-link')
  // @UseGuards(JwtAuthenticationGuard)
  // async resendConfirmationLink(@Req() request: RequestWithUser) {
  //   await this.emailConfirmationService.resendConfirmationLink(request.user.id);
  // }

}
