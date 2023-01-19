import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { StripeService } from '@/stripe/stripe.service';

@Injectable()
export class PaymentService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly paymentProvider: StripeService,
  ) {}

  async createCustomer(userId: string) {
    const user = await this.prismaService.users.findUnique({
      where: { id: userId },
      include: { Address: true },
    });

    if (user.stripe_customer_id) {
      return;
    }

    const customer = await this.paymentProvider.createCustomer(user);

    await this.prismaService.users.update({
      where: { id: userId },
      data: { stripe_customer_id: customer.id },
    });

    return;
  }
}
