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
          'PHPSESSID=5643b82ad3c57f5fd14eba02ed2a71f7; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2Nzg1NjQxODYsImV4cCI6MTY4NjM0MDE4Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiMjIyMTk4In0.FS9IIKY5h70WTWxWTiA1uTzT6xNDfwNOP5kK6Pz6holh2xzhPiXuQ6BIyTJQXGhmbdNF2Q3bS5qWBbD7VMjY4JxQkyAj6V0nr7jyQKKGyGzpfkbW2bntCAjRvNqzHrT21V0eEwR3LeNGggOAvbPhJq5xPkKw50X4QD9PBYFUrsyHnYBic6mOPcunV4Ui_XRnZBsP--Cyd_qZJrofGcGhpK5bZfRUN7DFtZCX_-4woeswBM2se5r4OU63HhnOFhrDhFg3jQamIkk1TSq2im2wzOs-CCfl7JhE-dyJMe0FQ7KoepWuRLI-G_G8vSQSl5ypHxBULITj2UXWeBTnxB01cg; hash=uP1wU5pE5sjdPfnKrnZZODMRPdG3nOCo; PHPSESSID=5643b82ad3c57f5fd14eba02ed2a71f7',
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
