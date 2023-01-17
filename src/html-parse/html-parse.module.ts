import { Module } from '@nestjs/common';
import { HtmlParseService } from './html-parse.service';

@Module({
  providers: [HtmlParseService],
  exports: [HtmlParseService],
})
export class HtmlParseModule {}
