import { Module } from '@nestjs/common';
import { PipiadsService } from './pipiads.service';
import { PipiadsController } from './pipiads.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PipiadsController],
  providers: [PipiadsService],
})
export class PipiadsModule {}
