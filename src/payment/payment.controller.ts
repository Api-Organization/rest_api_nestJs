import { AccessTokenGuard } from '@/common/guards/accessToken.guard';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
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
}
