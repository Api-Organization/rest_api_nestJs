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
    console.log(query);
    if (query) {
      const url = `https://clients.adserea.com/portal/tiktok-spy?q={${query}}`;
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

      const regex = /var\s+totalPages\s*=\s*"(\d+)"/;

      const match = response.data.html.match(regex);

      if (match) {
        const totalPagesValue = match[1];
        console.log(totalPagesValue); // Output: 1553651
      }

      const pagination = {
        totalPagesValue: match[1],
      };

      return { cards, pagination };
    }

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

    const totalPagesRegex = /var\s+totalPages\s*=\s*"(\d+)"/;

    const totalPagesMatch = response.data.html.match(totalPagesRegex);

    const pageNumberRegex = /var\s+pageNumber\s*=\s*"(\d+)"/;

    const pageNumberMatch = response.data.html.match(pageNumberRegex);

    const pageSizeRegex = /var\s+pageSize\s*=\s*"(\d+)"/;

    const pageSizeMatch = response.data.html.match(pageSizeRegex);

    const pagination = {
      totalPagesValue: totalPagesMatch[1],
      pageNumber: pageNumberMatch[1],
      pageSize: pageSizeMatch[1],
    };

    return { cards, pagination };
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
    const totalPagesRegex = /var\s+totalPages\s*=\s*"(\d+)"/;

    const totalPagesMatch = response.data.html.match(totalPagesRegex);

    const pageNumberRegex = /var\s+pageNumber\s*=\s*"(\d+)"/;

    const pageNumberMatch = response.data.html.match(pageNumberRegex);

    const pageSizeRegex = /var\s+pageSize\s*=\s*"(\d+)"/;

    const pageSizeMatch = response.data.html.match(pageSizeRegex);

    const pagination = {
      totalPagesValue: totalPagesMatch[1],
      pageNumber: pageNumberMatch[1],
      pageSize: pageSizeMatch[1],
    };

    return { card, pagination };
  }

  async getPageLive() {
    const url = `https://clients.adserea.com/portal/live-spy`;

    console.log('isso foi executado');
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
    console.log('isso foi executado1');

    const page = await this.htmlParseService.parse(response?.data);

    const cards = Array.from(
      page?.querySelectorAll(
        'div.page__container__main > div.wp__cards > div.live__card',
      ),
      (value, index) => ({
        creative: value
          ?.querySelector('div.live__card__image')
          ?.attributes?.style?.split("'")[1],
        title: value
          ?.querySelector('div.live__card__title.tx-synopsis')
          ?.innerHTML?.replace(/\n/g, ''),
        cardTop: {
          price: value
            .querySelector('div.live__card__row > div.live__card__row__price')
            ?.innerHTML?.replace(/\n/g, ''),
          icons: value
            .querySelectorAll(
              'div.live__card__row > div.live__card__row__icons > a',
            )
            .map((value) => value?.attributes?.href),
        },
        descriptionTop: {
          publishedAt: value
            .querySelector(
              'div.live__card__row > div.live__card__row__price > div.value.acc',
            )
            .innerHTML?.replace(/\n/g, ''),
          icons: value
            .querySelectorAll(
              'div.live__card__row > div.live__card__row__icons > a',
            )
            .map((value) => {
              return {
                href: value?.attributes?.href,
                img: value?.querySelector('img')?.attributes?.src,
              };
            }),
        },
        descriptionMiddle: {
          storeName: value
            .querySelector(
              'div.live__card__row > div.col.fl-one.gp-xs > div.value.tx-synopsis',
            )
            ?.innerHTML?.replace(/\n/g, ''),
          trafficRank: value
            .querySelectorAll(
              'div.live__card__row > div.col.fl-one.gp-xs > div.value',
            )[1]
            ?.innerHTML?.replace(/\n/g, ''),
        },
        descriptionDown: {
          storeSales: value
            .querySelectorAll(
              'div.live__card__row > div.col.fl-one.gp-xs > div.value',
            )[2]
            ?.innerHTML?.replace(/\n/g, ''),
          appSpend: value
            .querySelectorAll(
              'div.live__card__row > div.col.fl-one.gp-xs > div.value',
            )[3]
            ?.innerHTML?.replace(/\n/g, ''),
        },
      }),
    );

    return cards;
  }

  async getPageStore() {
    const url = `https://clients.adserea.com/portal/store-analyzer/q?d=gymshark.com`;

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

    const page = await this.htmlParseService.parse(response?.data?.html);

    const store = {
      storeDetails: {
        storeName: page
          ?.querySelector(
            'div.page__container > div.col > section.analyzer__stats > div.analyzer__stats__data > div.analyzer__stats__data__row > h3.analyzer__stats__data__row__title',
          )
          ?.innerHTML?.replace(/\n/g, ''),
        storeLink: page?.querySelector(
          'div.page__container > div.col > section.analyzer__stats > div.analyzer__stats__data > div.analyzer__stats__data__row > a',
        )?.attributes?.href,
        storeCreated: page
          ?.querySelector(
            'div.page__container > div.col > section.analyzer__stats > div.analyzer__stats__data > div.analyzer__stats__data__row > span.analyzer__stats__data__row__value',
          )
          ?.innerHTML?.replace(/\n/g, ''),
        storeDescription: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.analyzer__stats > div.analyzer__stats__data > div.analyzer__stats__data__col > div.analyzer__stats__data__col__value',
          )[0]
          ?.innerHTML?.replace(/\n/g, ''),
        monthlySales: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.analyzer__stats > div.analyzer__stats__data > div.analyzer__stats__data__col > div.analyzer__stats__data__col__value > h3',
          )[1]
          ?.innerHTML?.replace(/\n/g, ''),
        storesRank: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.analyzer__stats > div.analyzer__stats__data > div.analyzer__stats__data__col > div.analyzer__stats__data__col__value > h3',
          )[2]
          ?.innerHTML?.replace(/\n/g, ''),
      },
      rankingWidget: {
        globalRank: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.ranking__widget > div.ranking__widget__col > div.ranking__widget__col__value > h2',
          )[0]
          ?.innerHTML?.replace(/\n/g, ''),
        shopifyRank: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.ranking__widget > div.ranking__widget__col > div.ranking__widget__col__value > h2',
          )[1]
          ?.innerHTML?.replace(/\n/g, ''),
        categoryRank: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.ranking__widget > div.ranking__widget__col > div.ranking__widget__col__value > h2',
          )[2]
          ?.innerHTML?.replace(/\n/g, ''),
      },
      socialEngagments: {
        twitter: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.col > div.row.gp-lg.w-100 > div.col.gp-m.pd-m.bdr-m.bd-sm.fl-half.fl-card > div.grid_icons.gp-sm > div.col > span.col__value.sm',
          )[0]
          ?.innerHTML?.replace(/\n/g, ''),
        facebook: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.col > div.row.gp-lg.w-100 > div.col.gp-m.pd-m.bdr-m.bd-sm.fl-half.fl-card > div.grid_icons.gp-sm > div.col > span.col__value.sm',
          )[1]
          ?.innerHTML?.replace(/\n/g, ''),
        instagram: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.col > div.row.gp-lg.w-100 > div.col.gp-m.pd-m.bdr-m.bd-sm.fl-half.fl-card > div.grid_icons.gp-sm > div.col > span.col__value.sm',
          )[2]
          ?.innerHTML?.replace(/\n/g, ''),
        pinterest: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.col > div.row.gp-lg.w-100 > div.col.gp-m.pd-m.bdr-m.bd-sm.fl-half.fl-card > div.grid_icons.gp-sm > div.col > span.col__value.sm',
          )[3]
          ?.innerHTML?.replace(/\n/g, ''),
        youtube: page
          ?.querySelectorAll(
            'div.page__container > div.col > section.col > div.row.gp-lg.w-100 > div.col.gp-m.pd-m.bdr-m.bd-sm.fl-half.fl-card > div.grid_icons.gp-sm > div.col > span.col__value.sm',
          )[4]
          ?.innerHTML?.replace(/\n/g, ''),
      },
      installedAppspage: page
        ?.querySelectorAll(
          'div.page__container > div.col > section.col > div.row.gp-lg.w-100 > div.col.gp-m.pd-sm.bdr-m.bd-sm.fl-half.fl-card.scrollable > div.grid_icons.gp-sm > div.col',
        )
        ?.map((value) => {
          return {
            appIcon: value?.querySelector('img')?.attributes?.src,
            appName: value
              ?.querySelector('span.col__title')
              ?.innerHTML?.replace(/\n/g, ''),
            appStar: value
              ?.querySelector('span.col__value.sm')
              ?.innerHTML.replace(/<i.*?>.*?<\/i>/gi, '')
              .replace(' ', ''),
          };
        }),
      latestAddedProducts: Array.from(
        page
          ?.querySelectorAll('div.wp__cards.owl-carousel')[0]
          .querySelectorAll('div.wp__card'),
        (value, index) => ({
          creative: {
            img: value
              ?.querySelector(' a > div.wp__card__image')
              ?.attributes.style?.split("'")[1],
            src: value?.querySelector(' a')?.attributes?.href,
          },
          title: value?.querySelector(' div.wp__card__title > a')?.attributes
            ?.href,
          description: {
            sellingPrice: value
              ?.querySelector(
                ' div.wp__card__info > div.wp__card__info__group > div.col > div.wp__card__info__group__item > div.cDis + div',
              )
              ?.innerHTML?.replace(/\n/g, ''),
            published: value
              ?.querySelectorAll(
                ' div.wp__card__info > div.wp__card__info__group > div.col > div.wp__card__info__group__item > div.cDis + div',
              )[1]
              ?.innerHTML?.replace(/\n/g, ''),
            icons: value
              ?.querySelectorAll(
                ' div.wp__card__info > div.wp__card__info__group > div.row > a',
              )
              .map((value) => {
                return {
                  icon: value?.querySelector('img')?.attributes?.src,
                  link: value?.attributes?.href,
                };
              }),
          },
        }),
      ),
      bestSellerProducts: Array.from(
        page
          ?.querySelectorAll('div.wp__cards.owl-carousel')[1]
          .querySelectorAll('div.wp__card'),
        (value, index) => ({
          creative: {
            img: value
              ?.querySelector(' a > div.wp__card__image')
              ?.attributes.style?.split("'")[1],
            src: value?.querySelector(' a')?.attributes?.href,
          },
          title: value?.querySelector(' div.wp__card__title > a')?.attributes
            ?.href,
          description: {
            sellingPrice: value
              ?.querySelector(
                ' div.wp__card__info > div.wp__card__info__group > div.col > div.wp__card__info__group__item > div.cDis + div',
              )
              ?.innerHTML?.replace(/\n/g, ''),
            published: value
              ?.querySelectorAll(
                ' div.wp__card__info > div.wp__card__info__group > div.col > div.wp__card__info__group__item > div.cDis + div',
              )[1]
              ?.innerHTML?.replace(/\n/g, ''),
            icons: value
              ?.querySelectorAll(
                ' div.wp__card__info > div.wp__card__info__group > div.row > a',
              )
              .map((value) => {
                return {
                  icon: value?.querySelector('img')?.attributes?.src,
                  link: value?.attributes?.href,
                };
              }),
          },
        }),
      ),
    };
    return store;
  }
}
