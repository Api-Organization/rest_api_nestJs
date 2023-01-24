import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
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

  async createSubscription(userId: string, priceId: string) {
    const user = await this.prismaService.users.findUnique({
      where: { id: userId },
    });

    if (!user.stripe_customer_id) {
      throw new Error('User has no stripe customer id');
    }

    const subscription = await this.paymentProvider.createSubscription({
      stripeCustomerId: user.stripe_customer_id,
      priceId,
    });

    await this.prismaService.users.update({
      where: { id: user.id },
      data: {
        Subscription: {
          create: {
            active: false,
            stripe_subscription_id: subscription.subscriptionId,
            cancel_at_period_end: false,
            status: 'incomplete',
          },
        },
      },
      include: { Subscription: true },
    });

    return subscription.clientSecret;
  }

  async updateSubscription(type: string, subscriptionId: string) {
    const subscription = await this.prismaService.subscription.findFirst({
      where: { stripe_subscription_id: subscriptionId },
    });

    if (!subscription) {
      throw new NotFoundException('Subscription not found');
    }

    if (type === 'invoice.payment_failed') {
      return await this.prismaService.subscription.update({
        where: { id: subscription.id },
        data: {
          status: 'incomplete',
          active: false,
        },
      });
    }

    if (type !== 'invoice.payment_succeeded') {
      return await this.prismaService.subscription.update({
        where: { id: subscription.id },
        data: {
          status: 'active',
          active: true,
        },
      });
    }
  }
}
