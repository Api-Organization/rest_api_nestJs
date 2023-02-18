import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { EmailConfirmationModule } from '@/email-confirmation/email-confirmation.module';
import { NodemailerModule } from '@/nodemailer/nodemailer.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    EmailConfirmationModule,
    AuthModule,
    NodemailerModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
