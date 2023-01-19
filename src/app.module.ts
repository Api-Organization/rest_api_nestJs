import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { NotesModule } from './notes/notes.module';
import { FaqModule } from './faq/faq.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AccountsModule } from './accounts/accounts.module';
import { ReviewersModule } from './reviewers/reviewers.module';
import { HtmlParseModule } from './html-parse/html-parse.module';
import { AdheartModule } from './adheart/adheart.module';
import { PaymentModule } from './payment/payment.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AuthModule,
    ProductsModule,
    NotesModule,
    FaqModule,
    PermissionsModule,
    AccountsModule,
    ReviewersModule,
    HtmlParseModule,
    AdheartModule,
    PaymentModule,
    StripeModule,
  ],
  controllers: [],
})
export class AppModule {}
