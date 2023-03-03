import { Injectable } from '@nestjs/common';
import { HtmlParseService } from '@/html-parse/html-parse.service';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AdsereaService {
  constructor(
    private readonly htmlParseService: HtmlParseService,
    private readonly httpService: HttpService,
  ) {}
  async getPage(query: string) {
    const url = `https://adheart.me/teasers?${query}`;

    const response = await this.httpService.axiosRef({
      baseURL: url,
      method: 'GET',
      headers: {
        'Accept-Language': 'en-US,en;q=0.5',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        Referer: 'https://adheart.me/',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate,compress',
        Cookie:
          'PHPSESSID=6d4ee5f9243daba4f96dff520481bce1; _language=ru; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzYzMDg5MzIsImV4cCI6MTY4NDA4NDkzMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiMjE0NzMyIn0.ceg3BGLUcC1xO0RmSy6nSFCCm-6zaeBqgpPlU-puFv6dt-wD1m3IyXDWi5j5KZwmbUc6AoZZVIPnxMp7A4hqiAKpY5AMfJ_l1Q8aBlOaPokZvpKBl4-GfvMxcv6yg8bHTcl6AqYcAm8ORQ4Avfeadbewi69SC1HcsF_NlghajgnBBjrVx2mIqXE_jQQc5z9g9AJbpGsnb_7ZrbSut7CoWNntTmmSBKMdIQKiDDG8-7IYDBzQJcv-igN0wqQkOkswkNOiGFD0V4e1rbphTaqHyk_8fciMMO3lh2IQE6l-4NI3LY3nfhcfsLgw9MHfNKBKuC_lOYklSo6BUtdl1ZoBPA; hash=bEIl9WJkZUhS7wICIJ1mSR5sTNWgbaOV; PHPSESSID=39f0dfe076692086622beb329cb5351c',
      },
    });

    const page = await this.htmlParseService.parse(response.data);

    const cards = Array.from(
      page.querySelectorAll(
        'div.gridv.responsive.gp-m > div.col.gp-lg.tt_card',
      ),
      (value, index) => ({
        cardHeader: {
          img: value.querySelector(
            'div.row.gp-sm.ai-center.wr-wrap.jc-sp-between > img',
          )?.attributes?.src,
          title: value
            .querySelector(
              'div.row.gp-sm.ai-center.wr-wrap.jc-sp-between > div.col > span.fs-xs',
            )
            ?.innerText?.replace(/\n/g, ''),
          country: {
            img: value.querySelector(
              'div.row.gp-sm.ai-center.wr-wrap.jc-sp-between > div.col > div.row.gp-sm > i',
            ),
            name: value.querySelector(
              'div.row.gp-sm.ai-center.wr-wrap.jc-sp-between > div.col > div.row.gp-sm > span.fs-xs',
            ),
          },
        },
        cardDate: {
          title: value
            .querySelector('div.row.gp-sm.jc-sp-between > div.fs-xs')
            ?.innerText?.replace(/\n/g, ''),
        },
        cardCreative: {
          video: value.querySelector('div.video.fl-one > video > source')
            ?.attributes?.src,
        },
      }),
    );

    return {};
  }
}
