import { AccessTokenGuard } from '@/common/guards/accessToken.guard';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Request } from 'express';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-customer')
  @UseGuards(AccessTokenGuard)
  async createCustomer(@Req() req: Request) {
    const userId = req.user['sub'];
    return this.paymentService.createCustomer(userId);
  }

  @Post('create-subscription')
  @UseGuards(AccessTokenGuard)
  async createSubscription(
    @Req() req: Request,
    @Body('priceId') priceId: string,
  ) {
    const userId = req.user['sub'];

    console.log(userId);

    return this.paymentService.createSubscription(userId, priceId);
  }

  @Post('webhook')
  async webhook(@Body() body: any) {

    return this.paymentService.updateSubscription(
      body?.data.object?.statement_descriptor,
      body.type,
      body.data.object.subscription,
    );
  }
}
