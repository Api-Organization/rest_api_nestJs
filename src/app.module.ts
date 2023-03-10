import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
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
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { FilesModule } from './files/files.module';
import { MulterModule } from './multer/multer.module';
import { DevicesModule } from './devices/devices.module';
import { PrismaService } from './prisma/prisma.service';
import { DevicesService } from './devices/devices.service';
import { DeviceLimitMiddleware } from './common/middleware/DeviceLimit.middleware';
import { JwtService } from '@nestjs/jwt';
import { AdsereaModule } from './adserea/adserea.module';
import { PipiadsModule } from './pipiads/pipiads.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { NestCrawlerModule } from 'nest-crawler';
import { RequestsModule } from './requests/requests.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60 * 20,
      limit: 400,
    }),

    NestCrawlerModule,
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
    NodemailerModule,
    EmailConfirmationModule,
    FilesModule,
    MulterModule,
    DevicesModule,
    AdsereaModule,
    PipiadsModule,
    RequestsModule,
  ],
  controllers: [],
  providers: [
    DevicesService,
    PrismaService,
    JwtService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  exports: [DevicesService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DeviceLimitMiddleware)
      .forRoutes({ path: 'adheart', method: RequestMethod.POST });
  }
}
