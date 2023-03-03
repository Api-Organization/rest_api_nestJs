import { Module } from '@nestjs/common';
import { AdsereaService } from './adserea.service';
import { AdsereaController } from './adserea.controller';
import { HttpModule } from '@nestjs/axios';
import { HtmlParseModule } from '@/html-parse/html-parse.module';

@Module({
  imports: [HtmlParseModule, HttpModule],
  controllers: [AdsereaController],
  providers: [AdsereaService],
})
export class AdsereaModule {}
