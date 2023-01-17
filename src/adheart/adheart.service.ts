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
          '_language=ru; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzM5MTA4OTYsImV4cCI6MTY4MTY4Njg5Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiMTkxOTY4In0.MFHaXNgi6vdpfhqTYBmZDqlTm5oX365YRqJc4u1vLvy1vGX3dEhWaZVO0zknVGokk1-dme_qi0YCzLidenjukQ78HbltfMnI6-Mmilsa3xCVlLVvpxe-OYLjWQgQ4TCjS67YNWjm8sr4u8eli1ZxQx8Uq1lqHdfF5EzvY-tCppmiYubvFn07XUMZGC9XedThVX8VbQEZgxBrvnU12dhRatTnIIG9KAp83PHtrWfW138mgs-SFnml3l0PZsfpaPXMtwZ7tB5zVooymI-bnkZWq9tEvUmXUXnB16Icgzky0MTWVwF0OhQ1AhKQCvdoJ4w3-rHRWcvhvbuUDP-KrBlLEg; hash=FbQidMmjohMwcxew3zFeH0QsYj40ftGK; PHPSESSID=99bf63ef568d13bf93683e5c691d0756',
      },
    });

    const page = await this.htmlParseService.parse(response.data);

    const cards = Array.from(
      page.querySelectorAll('div.card-blog'),
      (value) => ({
        cardHeader: {
          img: value.querySelector('img').attributes.src,
          title: value
            .querySelector('h4 > a')
            ?.innerText.replace(/\n/g, '')
            .replace(/( )+/g, ' '),
          titleLink: value.querySelector(
            '.media-body > h4 > a[target*="blank"]',
          ).attributes.href,
          date: value
            .querySelector('.media-body > p')
            ?.innerText.replace(/\n/g, '')
            .replace(/( )+/g, ' '),
          plataforms: value
            .querySelectorAll('.platforms > img[src*="/tpl/platforms/"]')
            .map((item) => `https://adheart.me${item.attributes.src}`),
        },
        btnGroup: {
          allTeasers: `https://adheart.me${
            value.querySelector('div.btn-group > a').attributes.href
          }`,
          similarTeasers: `https://adheart.me${
            value.querySelector('a[href*="/teasers/?identical_to"]').attributes
              .href
          }`,
          firstCopy: value
            .querySelector('div.btn-group > button')
            .innerHTML.replace(/\n/g, '')
            .replace(/( )+/g, ' '),
        },
        carousel: {
          items:
            value.querySelectorAll('.carousel-item > img').length === 0
              ? value.querySelector('.carousel-item > video').attributes.src
              : Array.from(value.querySelectorAll('.carousel-item > img'))?.map(
                  (item) => item.attributes.src,
                ),
        },
        cardInformation: {
          title: value
            .querySelector('.teaser_text_title')
            ?.innerHTML.replace(/\n/g, '')
            .replace(/( )+/g, ' '),
          description: value
            .querySelector('.teaser_text_link_description')
            ?.innerHTML.replace(/\n/g, '')
            .replace(/( )+/g, ' '),
        },
        cardFooter: {
          findLinks: value.querySelector('a[href*="/teasers/?in"]')?.attributes
            .href,
          findIp: value.querySelector('a[href*="/teasers/?ip"]')?.attributes
            .href,
          inputLink:
            value.querySelector('input.form-control')?.attributes.value,
          goToLink: value.querySelector('.input-group > div:nth-child(5) > a')
            ?.attributes.href,
        },
      }),
    );

    const pagination = {
      text: page
        .querySelector('#pagination_top > .col-lg-8 > span:nth-child(1)')
        .innerText.replace(/\n/g, '')
        .replace(/( )+/g, ' ')
        .replace('"', '')
        .replace(',', ''),
      total: page
        .querySelector('#pagination_top > .col-lg-8 > a:nth-child(6)')
        .innerText.replace(/\n/g, '')
        .replace(/( )+/g, ' '),
    };

    return {
      pagination,
      cards,
    };
  }
}
