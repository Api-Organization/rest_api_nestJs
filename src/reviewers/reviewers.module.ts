import { Module } from '@nestjs/common';
import { ReviewersService } from './reviewers.service';
import { ReviewersController } from './reviewers.controller';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReviewersController],
  providers: [ReviewersService],
})
export class ReviewersModule {}
