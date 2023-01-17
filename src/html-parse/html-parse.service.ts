import { Injectable } from '@nestjs/common';
import { parse, HTMLElement } from 'node-html-parser';

@Injectable()
export class HtmlParseService {
  parse(html: string): HTMLElement {
    return parse(html);
  }
}
