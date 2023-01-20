import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { EmailConfirmationModule } from '@/email-confirmation/email-confirmation.module';
import { NodemailerModule } from '@/nodemailer/nodemailer.module';

@Module({
  imports: [PrismaModule, EmailConfirmationModule, NodemailerModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
