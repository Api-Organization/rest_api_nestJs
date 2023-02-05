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
          'PHPSESSID=6d4ee5f9243daba4f96dff520481bce1; _language=ru; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzU1NjI5MzksImV4cCI6MTY4MzMzODkzOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiMjEwNzA3In0.SJlAHkJ3Rj4xtXkc97Y_PLBN7VuXX6JboEF2fP4MnW7TV4feLJyqpDKGcz0qwIJLgHSLG8aWB6KbB9UG68dwdm7cIw8ATqwZ6FJXIBsEYIn-OBND7Ulp7UuAMzx9X6HNvoCPvqP3d8qxlKVx9FHCdlBCTdQRzWS77znKMZx87qo8h4sulv9yNeI4ydQQ2qsj04MOk9VI1ikpNgqJkVVm5JZrLuqnQIXxUbIpP4mj5FaCjAqtNQmXociq62Wa7XlcieDWpDOFl9HWrrRg3x0jXdUS8wwLm5hza_qsVgHUjPibHHGqYIqncFJWYm7LIF_pILRJJ7BYKNzoKJjDqRHYbA; hash=5ouZYAW8phomvwJs6Taph2dqFGdcR3Qq; PHPSESSID=8ba8a42986baf63a606bd22136e43d7b',
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

    const error = {
      errorUp: page
        .querySelector('div.alert.alert-solid.alert-danger')
        ?.innerText?.replace(/\n/g, ''),
      errorDown: page
        .querySelector('div.alert.alert-solid.alert-outline-danger')
        ?.innerText?.replace(/\n/g, ''),
    };

    return {
      pagination,
      cards,
      error,
    };
  }
}
