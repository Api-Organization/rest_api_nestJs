import { Injectable } from '@nestjs/common';
import { HtmlParseService } from '@/html-parse/html-parse.service';
import { HttpService } from '@nestjs/axios';
import { Page } from 'puppeteer';

@Injectable()
export class AdsereaService {
  constructor(
    private readonly htmlParseService: HtmlParseService,
    private readonly httpService: HttpService,
  ) {}
  async getPageHome(query: string) {
    const url = `https://clients.adserea.com/portal/tiktok-spy`;

    const response = await this.httpService.axiosRef({
      baseURL: url,
      method: 'POST',
      headers: {
        'Accept-Language': 'en-US,en;q=0.5',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        Referer: 'https://adserea.com/',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate,compress',
        Cookie:
          '_country=br; _y=997244f9-4b88-45e5-9e78-4b958578e02c; _shopify_y=997244f9-4b88-45e5-9e78-4b958578e02c; _cmp_a=%7B%22purposes%22%3A%7B%22a%22%3Atrue%2C%22p%22%3Atrue%2C%22m%22%3Atrue%2C%22t%22%3Atrue%7D%2C%22display_banner%22%3Afalse%2C%22merchant_geo%22%3A%22US%22%2C%22sale_of_data_region%22%3Afalse%7D; _orig_referrer=; _landing_page=%2F; G_ENABLED_IDPS=google; _s=58cdea60-8d78-4376-8040-fa470d516534; _shopify_s=58cdea60-8d78-4376-8040-fa470d516534; _shopify_sa_p=; _shopify_sa_t=2023-03-02T23%3A17%3A29.718Z; connect.sid=s%3A4das8Cazi7T2cE9bLQrsfg1r6rHc7Lqc.np5E0xQjAg%2FxkulRvOn8x7bPizTWMM3CKNJS8mAmyKQ; AMP_9bdc728a74={"deviceId":"f384ab98-cf0c-424a-ac83-9372edeea63f","sessionId":1677799057348,"lastEventTime":1677799057348,"optOut":false}',
      },
    });

    const page = await this.htmlParseService.parse(response.data.html);

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
            // img: value.querySelector(
            //   'div.row.gp-sm.ai-center.wr-wrap.jc-sp-between > div.col > div.row.gp-sm > i',
            // ),
            name: value
              .querySelector(
                'div.row.gp-sm.ai-center.wr-wrap.jc-sp-between > div.col > div.row.gp-sm > span.fs-xs',
              )
              ?.innerText?.replace(/\n/g, ''),
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
        cardDescription: {
          title: value
            .querySelector(
              'div.col.gp-sm.jc-center.wr-wrap > div.col > span.fs-xs.fw-bs.tx-synopsis',
            )
            ?.innerHTML?.replace(/\n/g, ''),
        },
        cardFooter: {
          views: value
            .querySelector(
              'div.info.row.gp-sm.jc-sp-even.ai-center.wr-wrap > div.col.gp-sm.ai-center.wr-wrap > span.fs-lg.fw-bs',
            )
            ?.innerText?.replace(/\n/g, ''),
          days: value
            .querySelectorAll(
              'div.info.row.gp-sm.jc-sp-even.ai-center.wr-wrap > div.col.gp-sm.ai-center.wr-wrap > span.fs-lg.fw-bs',
            )[1]
            ?.innerText?.replace(/\n/g, ''),
          Popularity: value
            .querySelectorAll(
              'div.info.row.gp-sm.jc-sp-even.ai-center.wr-wrap > div.col.gp-sm.ai-center.wr-wrap > span.fs-lg.fw-bs',
            )[2]
            ?.innerText?.replace(/\n/g, ''),
        },
        creativeId: value.querySelector(
          'div.button.btn_primary.w100.btn_details',
        ).attributes['data-target'],
      }),
    );

    return { cards };
  }
  async getPageDetails(query: string) {
    const url = `https://clients.adserea.com/portal/tiktok-spy/tt`;

    const response = await this.httpService.axiosRef({
      baseURL: url,
      method: 'POST',
      data: { id: '#7084023910961777966' },
      headers: {
        'Accept-Language': 'en-US,en;q=0.5',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        Referer: 'https://adserea.com/',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate,compress',
        Cookie:
          '_country=br; _y=997244f9-4b88-45e5-9e78-4b958578e02c; _shopify_y=997244f9-4b88-45e5-9e78-4b958578e02c; _cmp_a=%7B%22purposes%22%3A%7B%22a%22%3Atrue%2C%22p%22%3Atrue%2C%22m%22%3Atrue%2C%22t%22%3Atrue%7D%2C%22display_banner%22%3Afalse%2C%22merchant_geo%22%3A%22US%22%2C%22sale_of_data_region%22%3Afalse%7D; _orig_referrer=; _landing_page=%2F; G_ENABLED_IDPS=google; _s=58cdea60-8d78-4376-8040-fa470d516534; _shopify_s=58cdea60-8d78-4376-8040-fa470d516534; _shopify_sa_p=; _shopify_sa_t=2023-03-02T23%3A17%3A29.718Z; connect.sid=s%3A4das8Cazi7T2cE9bLQrsfg1r6rHc7Lqc.np5E0xQjAg%2FxkulRvOn8x7bPizTWMM3CKNJS8mAmyKQ; AMP_9bdc728a74={"deviceId":"f384ab98-cf0c-424a-ac83-9372edeea63f","sessionId":1677799057348,"lastEventTime":1677799057348,"optOut":false}',
      },
    });
    const page = await this.htmlParseService.parse(response?.data?.html);

    const card = {
      creative: {
        src: page.querySelector(
          ' div.row > div.col.video_section > div.video > video > source',
        )?.attributes?.src,
        infos: {
          likes: page
            .querySelector(
              ' div.row > div.col.video_section > div.eng > div.row.gp-sm.jc-sp-even.ai-center > div.row.gp-sm > i.fas.fa-heart + span',
            )
            ?.innerText?.replace(/\n/g, ''),
          comments: page
            .querySelector(
              ' div.row > div.col.video_section > div.eng > div.row.gp-sm.jc-sp-even.ai-center > div.row.gp-sm > i.fas.fa-comment + span',
            )
            ?.innerText?.replace(/\n/g, ''),
          share: page
            .querySelector(
              ' div.row > div.col.video_section > div.eng > div.row.gp-sm.jc-sp-even.ai-center > div.row.gp-sm > i.fas.fa-share-alt + span',
            )
            ?.innerText?.replace(/\n/g, ''),
        },
      },
      cardHead: {
        img: page.querySelector(
          ' div.row > div.col.content_section > div.row.gp-sm > img.avatar',
        )?.attributes?.src,
        displayName: page
          .querySelector(
            ' div.row > div.col.content_section > div.row.gp-sm > div.col.gp-sm > div.fs-xs.fw-bs',
          )
          ?.innerHTML?.replace(/\n/g, ''),
        adText: page
          .querySelector(
            ' div.row > div.col.content_section > div.row.gp-sm > div.col.gp-sm > div.fs-xs.fw-bs.tx-synopsis.adText',
          )
          ?.innerHTML?.replace(/\n/g, ''),
      },
      cardMiddle: {
        views: page
          .querySelectorAll(
            ' div.row > div.col.content_section > div.enagement.row.jc-sp-even > div.col.jc-center.ai-center > div.fs-lg.fw-bs',
          )[0]
          ?.innerHTML?.replace(/\n/g, ''),
        days: page
          .querySelectorAll(
            ' div.row > div.col.content_section > div.enagement.row.jc-sp-even > div.col.jc-center.ai-center > div.fs-lg.fw-bs',
          )[1]
          ?.innerHTML?.replace(/\n/g, ''),
        popularity: page
          .querySelectorAll(
            ' div.row > div.col.content_section > div.enagement.row.jc-sp-even > div.col.jc-center.ai-center > div.fs-lg.fw-bs',
          )[2]
          ?.innerHTML?.replace(/\n/g, ''),
        estAdCost: page
          .querySelectorAll(
            ' div.row > div.col.content_section > div.enagement.row.jc-sp-even > div.col.jc-center.ai-center > div.fs-m.fw-bs',
          )[0]
          ?.innerHTML?.replace(/\n/g, ''),
        estConversions: page
          .querySelectorAll(
            ' div.row > div.col.content_section > div.enagement.row.jc-sp-even > div.col.jc-center.ai-center > div.fs-m.fw-bs',
          )[1]
          ?.innerHTML?.replace(/\n/g, ''),
        enagementRate: page
          ?.querySelectorAll(
            ' div.row > div.col.content_section > div.enagement.row.jc-sp-even > div.col.jc-center.ai-center > div.fs-m.fw-bs',
          )[2]
          ?.innerHTML?.replace(/\n/g, ''),
      },
      cardDescription: {
        //   country: {
        //     img: page
        //       ?.querySelectorAll(
        //         ' div.row > div.col.content_section > div.row.gp-sm > div.col.gp-lg.jc-center',
        //       )[1]
        //       ?.querySelector('i.flag-icon.flag-icon-us.flag_circle'),
        name: page
          ?.querySelectorAll(
            ' div.row > div.col.content_section > div.row.gp-sm > div.col.gp-lg.jc-center',
          )[1]
          ?.querySelector('span.fs-xs.fw-bs.tx-synopsis')
          ?.innerHTML?.replace(/\n/g, ''),
        // },
        firstLastSeen: page
          ?.querySelectorAll(
            ' div.row > div.col.content_section > div.row.gp-sm > div.col.gp-lg.jc-center',
          )[1]
          ?.querySelector('div.fs-xs.fw-bs.tx-synopsis')
          ?.innerHTML?.replace(/\n/g, ''),
        productSource: page
          ?.querySelectorAll(
            ' div.row > div.col.content_section > div.row.gp-sm > div.col.gp-lg.jc-center',
          )[1]
          ?.querySelectorAll('div.fs-xs.fw-bs.tx-synopsis')[1]
          ?.innerHTML?.replace(/\n/g, ''),
        tiktokUrl: page
          ?.querySelectorAll(
            ' div.row > div.col.content_section > div.row.gp-sm > div.col.gp-lg.jc-center',
          )[1]
          ?.querySelectorAll('div.fs-xs.fw-bs.tx-synopsis')[2]
          ?.querySelector('a')?.attributes?.href,
      },
      cardFooter: {
        downloadButton: page
          ?.querySelector(
            ' div.row > div.col.content_section > div.row.gp-m > a.button.secondary.row.gp-sm.jc-center.ai-center',
          )
          ?.attributes?.href?.replace(/\n/g, ''),
        // findThisProduct: page,
        qrCode: page?.querySelector(
          ' div.row > div.col.content_section > div.col.fl-one.qr > div.ti_qr',
        )?.attributes['data-url'],
      },
    };

    return card;
  }

  async getPageLive() {
    const url = `https://clients.adserea.com/portal/live-spy`;

    console.log('isso foi executado')
    const response = await this.httpService.axiosRef({
      baseURL: url,
      method: 'GET',
      headers: {
        'Accept-Language': 'en-US,en;q=0.5',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        Referer: 'https://adserea.com/',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate,compress',
        Cookie:
          '_country=br; _y=997244f9-4b88-45e5-9e78-4b958578e02c; _shopify_y=997244f9-4b88-45e5-9e78-4b958578e02c; _cmp_a=%7B%22purposes%22%3A%7B%22a%22%3Atrue%2C%22p%22%3Atrue%2C%22m%22%3Atrue%2C%22t%22%3Atrue%7D%2C%22display_banner%22%3Afalse%2C%22merchant_geo%22%3A%22US%22%2C%22sale_of_data_region%22%3Afalse%7D; _orig_referrer=; _landing_page=%2F; G_ENABLED_IDPS=google; _s=58cdea60-8d78-4376-8040-fa470d516534; _shopify_s=58cdea60-8d78-4376-8040-fa470d516534; _shopify_sa_p=; _shopify_sa_t=2023-03-02T23%3A17%3A29.718Z; connect.sid=s%3A4das8Cazi7T2cE9bLQrsfg1r6rHc7Lqc.np5E0xQjAg%2FxkulRvOn8x7bPizTWMM3CKNJS8mAmyKQ; AMP_9bdc728a74={"deviceId":"f384ab98-cf0c-424a-ac83-9372edeea63f","sessionId":1677799057348,"lastEventTime":1677799057348,"optOut":false}',
      },
    });
    console.log('isso foi executado1')

    const page = await this.htmlParseService.parse(response?.data);


    const cards = Array.from(
      page?.querySelectorAll(
        'div.page__container__main > div.wp__cards > div.live__card',
      ),
      (value, index) => ({
        creative: value?.querySelector('div.live__card__image')?.attributes?.style?.split("'")[1],
        title: value?.querySelector('div.live__card__title.tx-synopsis')?.innerHTML?.replace(/\n/g, ''),
      }),
    );

    return cards;
  }
}
