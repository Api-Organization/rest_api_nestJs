import { Module } from '@nestjs/common';
import { AdheartService } from './adheart.service';
import { AdheartController } from './adheart.controller';
import { HtmlParseModule } from '@/html-parse/html-parse.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HtmlParseModule, HttpModule],
  controllers: [AdheartController],
  providers: [AdheartService],
})
export class AdheartModule {}
