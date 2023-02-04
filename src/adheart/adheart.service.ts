import { Injectable } from '@nestjs/common';
import { HtmlParseService } from '@/html-parse/html-parse.service';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AdheartService {
  constructor(
    private readonly htmlParseService: HtmlParseService,
    private readonly httpService: HttpService,
  ) {}

  async getPage(query: { [key: string]: string }) {
    const params = new URLSearchParams(query).toString();
    const url = `https://adheart.me/teasers?${params}`;

    const response = await this.httpService.axiosRef({
      baseURL: url,
      method: 'GET',
      headers: {
        'Accept-Encoding': 'gzip,deflate,compress',
        Cookie:
          'PHPSESSID=6d4ee5f9243daba4f96dff520481bce1; _language=ru; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzQ4NTU5MDQsImV4cCI6MTY4MjYzMTkwNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiMjA2OTU0In0.cu0mwM1uV2tn4LeQfg7g9mS04ZsVk1FU5fVc1Y56oc0uqTBvRHbEq-yvhlYXwmCMq0bm2qQzQJx3v09xZYEB5aSAP7gtPqwNnYFij4v_WHxS7RNj9ArclMhOK7enyjs6WywOCi2uvdpJVJU-OFCWsTnHi-IWBHXYUpZ_LKESLFNDI9vlMBm9cTwI3745DQHzl5Iznv8koTQyK2hLt5UtL8jbWX5jYmlb1djc6HxuyvjU7ytFr7klpME8ZDeF1Ig92HzC8q3SP0AzYlWgFqGwCYKNNtU7F2EuMrBU0bA3woL83LeL2BKNIFCcRfuqnRMLCtycoYXvIorZlMyorxJ2Fg; hash=9rePKfGmddYfCvgQ9QwP2rwof3DziXv7',
      },
    });

    const page = await this.htmlParseService.parse(response.data);

    const cards = Array.from(
      page.querySelectorAll('div.card-blog'),
      (value) => ({
        cardHeader: {
          img: value.querySelector('img')?.attributes?.src,
          title: value
            .querySelector('h4 > a')
            ?.innerText?.replace(/\n/g, '')
            .replace(/( )+/g, ' '),
          titleLink: value.querySelector(
            '.media-body > h4 > a[target*="blank"]',
          )?.attributes?.href,
          date: value
            .querySelector('.media-body > p')
            ?.innerText?.replace(/\n/g, '')
            ?.replace(/( )+/g, ' '),
          plataforms: value
            .querySelectorAll('.platforms > img[src*="/tpl/platforms/"]')
            .map((item) => `https://adheart.me${item?.attributes?.src}`),
        },
        btnGroup: {
          allTeasers: `${
            value.querySelector('div.btn-group > a')?.attributes?.href
          }`,
          similarTeasers: `${
            value.querySelector('a[href*="/teasers/?identical_to"]')?.attributes
              ?.href
          }`,
          firstCopy: value
            .querySelector('div.btn-group > button')
            ?.innerHTML?.replace(/\n/g, '')
            .replace(/( )+/g, ' '),
        },
        carousel: {
          items:
            value.querySelectorAll('.carousel-item > img')?.length === 0
              ? value.querySelector('.carousel-item > video')?.attributes?.src
              : Array.from(value.querySelectorAll('.carousel-item > img'))?.map(
                  (item) => item?.attributes.src,
                ),
        },
        cardInformation: {
          title: value
            .querySelector('.teaser_text_title')
            ?.innerHTML?.replace(/\n/g, '')
            ?.replace(/( )+/g, ' '),
          description: value
            .querySelector('.teaser_text_link_description')
            ?.innerHTML?.replace(/\n/g, '')
            ?.replace(/( )+/g, ' '),
        },
        cardButton: value
          .querySelector('.card-body > span.kt-font-primary')
          ?.innerText.replace(/\n/g, ''),
        cardFooter: {
          findLinks: value.querySelector('a[href*="/teasers/?in"]')?.attributes
            ?.href,
          findIp: value.querySelector('a[href*="/teasers/?ip"]')?.attributes
            ?.href,
          inputLink:
            value.querySelector('input.form-control')?.attributes?.value,
          goToLink: value.querySelector('.input-group > div:nth-child(5) > a')
            ?.attributes?.href,
        },
      }),
    );

    const pagination = {
      text: page
        .querySelector('#pagination_top > .col-lg-8 > span:nth-child(1)')
        ?.innerText.replace(/\n/g, '')
        ?.replace(/( )+/g, ' ')
        ?.replace('"', '')
        ?.replace(',', ''),
      total: page
        .querySelectorAll('#pagination_top > .col-lg-8 > a[href*="#"]')
        [
          page.querySelectorAll('#pagination_top > .col-lg-8 > a[href*="#"]')
            .length - 1
        ]?.innerText.replace(/\n/g, '')
        ?.replace(/( )+/g, ' '),
    };

    return {
      pagination,
      cards,
    };
  }
}
