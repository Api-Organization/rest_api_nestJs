import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Stripe } from 'stripe';

type UserWithAddress = Prisma.UsersGetPayload<{
  include: {
    Address: true;
  };
}>;

@Injectable()
export class StripeService implements OnModuleInit {
  stripe: Stripe;

  async onModuleInit() {
    this.stripe = new Stripe(
      'sk_test_51MCE8XIrC6uJHsGlAy6lLaY94zKpjtIDFfP14zuZGaBk86D4aU0cKRgssWmuM104PHD20nNTJdQjqVipy4PdVpBg00ccXN7rty',
      {
        apiVersion: '2022-11-15',
      },
    );
  }

  async createCustomer(user: UserWithAddress) {
    const {
      name,
      email,
      Address: [{ city, country, state, postal_code, line1 }],
    } = user;

    return await this.stripe.customers.create({
      name,
      email,
      shipping: {
        address: {
          city,
          country,
          line1,
          state,
          postal_code,
        },
        name,
      },
      address: {
        city,
        country,
        line1,
        postal_code,
        state,
      },
    });
  }

  async createSubscription({
    stripeCustomerId,
    priceId,
  }: {
    stripeCustomerId: string;
    priceId: string;
  }) {
    const subscription = await this.stripe.subscriptions.create({
      customer: stripeCustomerId,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
    });

    return {
      subscriptionId: subscription.id,
      clientSecret: (subscription.latest_invoice as { [key: string]: any })
        .payment_intent.client_secret,
    };
  }
}
