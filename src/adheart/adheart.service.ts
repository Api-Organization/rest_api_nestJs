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
    console.log(query);
    const url = `https://adheart.me/teasers?${query}`;

    const response = await this.httpService.axiosRef({
      baseURL: url,
      method: 'GET',
      headers: {
        'Accept-Encoding': 'gzip,deflate,compress',
        Cookie:
          'token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzYzMDgyNjYsImV4cCI6MTY4NDA4NDI2Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiMjE0NzMyIn0.pMM71SwZIrfNvVCmF7pAVK6ITu2hbVnTiAHxhyZ0vwLh6q6FTPe9iOrXGsb_JJOhJp6xSreWAfrA5zfliHOXiGlFf8vUgpI49pe4s0GEyF5jiTZgHXtr1GWNBDkZkg7TONUzm3DYtuw2SDcOGwrplmr6B6apaD2ZsH-ZPpNnFFVvVojaytMzoxsGrHMRYFa1LI0WaRpJ-_NKTgD17hPcbHs_LS4avbdCH2Od2FhCgxDLMtilo1_4kgPfITY9qJ6WcuHbiVlarUevu19IKiDC04algzU10c9jXSrNMEZn7Tk-dk_zhkcLwCqL46Zo_FAK0Fzvls2wFWYcfWVC5ZTZ0A; hash=bEIl9WJkZUhS7wICIJ1mSR5sTNWgbaOV; reflink=GAOHEXy; _aid=9c2376dd803c13a01c8a364551c43b58; PHPSESSID=0bdf777cc13f691deca8c8d1a2995bb4',
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
