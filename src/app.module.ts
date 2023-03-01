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
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { FilesModule } from './files/files.module';
import { MulterModule } from './multer/multer.module';
import { DevicesModule } from './devices/devices.module';
import { PrismaService } from './prisma/prisma.service';
import { DevicesService } from './devices/devices.service';

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
    NodemailerModule,
    EmailConfirmationModule,
    FilesModule,
    MulterModule,
    DevicesModule,
  ],
  controllers: [],
  providers: [DevicesService, PrismaService],
  exports: [DevicesService],
})
export class AppModule {}
