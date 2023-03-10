import { Injectable } from '@nestjs/common';
import { HtmlParseService } from '@/html-parse/html-parse.service';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AdheartService {
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
          'PHPSESSID=cfd708cbbf204b14516c7e69870962a6; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2Nzg0NzY5NjksImV4cCI6MTY4NjI1Mjk2OSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiMjI5MDc2In0.KCwlVaBaQsA5V71FXgF75EXCOthNHRlxcGh8p4jC5Lj8snGZTCtxkVs8r1sTSx8WLfUAxeAulIGQ5O_46vaO7S47FdPyQ-jsY5FDmZIExjcdiAYDmJ9qVF9lYT7I5318mhvs1iLlgHEH5m6ADY2xvrwVgfQS5VZST0492Ohhlypockr3lkRnqpRSS7qJLruVfwwqFZ0-Lli31OOokYm8OZDpNVfaV07zIoUSpoO6SG7uy3XPNkjF64j-XDo3SzfZp3kR4Je4j5QW3X9k7YeLX00GKXs4OG6oZoQ1LmyKHsMibgThuKOL6rOzuIRennMTCuoDABUN0NkYSmlducrjSQ; hash=nT00QE6fbmjcOztLlAfKtXBjIcrQih1y; PHPSESSID=cfd708cbbf204b14516c7e69870962a6',
      },
    });

    const page = await this.htmlParseService.parse(response.data);

    const cards = Array.from(
      page.querySelectorAll('div.card-blog'),
      (value, index) => ({
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
            ?.replace(/( )+/g, ' ')
            .replace(/(<([^>]+)>)/gi, ''),
          descriptionUp: value
            ?.querySelector('p.teaser_text_html')
            ?.innerText?.replace(/\n/g, '')
            ?.replace(/( )+/g, ' '),
          description: value
            .querySelector('.teaser_text_link_description')
            ?.innerHTML?.replace(/\n/g, '')
            ?.replace(/( )+/g, ' '),
          geos:
            value.querySelectorAll('.card-body > img[src*="/tpl/flags"]')
              ?.length === 0
              ? value.querySelector('.card-body > img[src*="/tpl/flags"]')
                  ?.attributes?.src
              : Array.from(
                  value.querySelectorAll('.card-body > img[src*="/tpl/flags"]'),
                )?.map((item) => item?.attributes.src),
        },
        cardSettings: {
          download: page?.querySelector(
            'div.card-img-overlay > div.btn-group > a[href*="/d/"]',
          )?.attributes?.href,
          openImg: `${index}`,
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

    const geos = Array.from(
      page.querySelectorAll('img[src*="/tpl/flags"]'),
    )?.map((item) => item?.attributes.src);

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

    const error = {
      errorUp: page
        .querySelector('div.alert.alert-solid.alert-danger')
        ?.innerText?.replace(/\t/g, '')
        ?.replace(/\n/g, ''),
      errorDown: page
        .querySelector('div.alert.alert-solid.alert-outline-danger')
        ?.innerText?.replace(/\t/g, '')
        ?.replace(/\n/g, '')
        ?.replace(`///`, ''),
    };

    return {
      pagination,
      cards,
      error,
    };
  }
}
