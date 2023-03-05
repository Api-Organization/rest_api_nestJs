import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PipiadsService {
  constructor(private readonly httpService: HttpService) {}

  async getPageTiktok(query: string) {
    const url = `https://www.pipiads.com/v1/api/at/video/search?${query}`;

    const data = {
      extend_keywords: [],
      keyword: [],
      channel: 0,
      search_type: 1,
      region: [],
      button: [],
      exclude_word: [],
      page_size: 20,
      sort: 1,
      exclude_history: 0,
      current_page: 1,
    };

    const response = await this.httpService.axiosRef({
      baseURL: url,
      method: 'POST',
      data,
      headers: {
        'Accept-Language': 'en-US,en;q=0.5',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        Referer: 'https://pipiads.com/',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate,compress',
        Cookie:
          'JSESSIONID=07F6FC0E035985790BF64F140068D2AB; uid=NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTI3OTY0NTY5; PP-userInfo={%22access_token%22:%22NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTE2Nzc4NzQxOTE=%22%2C%22vip_deadline%22:null%2C%22expires%22:1680466191%2C%22level%22:%22FREE%22%2C%22discount_code%22:%22GG20OFF%22%2C%22_id%22:%22640253acb032bf5ff0c6b4d0%22%2C%22email%22:%22fernando.atr@outlook.com%22%2C%22username%22:%22fernando.atr@outlook.com%22}',
        device_id: '783908153',
        access_token: 'NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTE2Nzc4NzQxOTE=',
      },
    });

    return response.data;
  }
  async getPageProductSearch(query: string) {
    const url = `https://www.pipiads.com/v1/api/product?${query}`;

    const response = await this.httpService.axiosRef({
      baseURL: url,
      method: 'GET',
      headers: {
        'Accept-Language': 'en-US,en;q=0.5',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        Referer: 'https://pipiads.com/',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate,compress',
        Cookie:
          'JSESSIONID=07F6FC0E035985790BF64F140068D2AB; uid=NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTI3OTY0NTY5; PP-userInfo={%22access_token%22:%22NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTE2Nzc4NzQxOTE=%22%2C%22vip_deadline%22:null%2C%22expires%22:1680466191%2C%22level%22:%22FREE%22%2C%22discount_code%22:%22GG20OFF%22%2C%22_id%22:%22640253acb032bf5ff0c6b4d0%22%2C%22email%22:%22fernando.atr@outlook.com%22%2C%22username%22:%22fernando.atr@outlook.com%22}',
        device_id: '783908153',
        access_token: 'NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTE2Nzc4NzQxOTE=',
      },
    });

    return response.data;
  }
  async getPageProductWinning(query: string) {
    const url = `https://www.pipiads.com/v1/api/video-recommend?${query}`;

    const response = await this.httpService.axiosRef({
      baseURL: url,
      method: 'GET',
      headers: {
        'Accept-Language': 'en-US,en;q=0.5',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        Referer: 'https://pipiads.com/',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate,compress',
        Cookie:
          'JSESSIONID=07F6FC0E035985790BF64F140068D2AB; uid=NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTI3OTY0NTY5; PP-userInfo={%22access_token%22:%22NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTE2Nzc4NzQxOTE=%22%2C%22vip_deadline%22:null%2C%22expires%22:1680466191%2C%22level%22:%22FREE%22%2C%22discount_code%22:%22GG20OFF%22%2C%22_id%22:%22640253acb032bf5ff0c6b4d0%22%2C%22email%22:%22fernando.atr@outlook.com%22%2C%22username%22:%22fernando.atr@outlook.com%22}',
        device_id: '783908153',
        access_token: 'NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTE2Nzc4NzQxOTE=',
      },
    });

    return response.data;
  }
  async getPageAdvertiser(query: string) {
    const url = `https://www.pipiads.com/v1/api/root_path/rank/search`;

    const data = {
      channel: 0,
      sort: 0,
      time: 2,
      page_size: 20,
      region: [],
      current_page: 1,
    };

    const response = await this.httpService.axiosRef({
      baseURL: url,
      method: 'POST',
      data,
      headers: {
        'Accept-Language': 'en-US,en;q=0.5',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        Referer: 'https://pipiads.com/',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate,compress',
        Cookie:
          'JSESSIONID=07F6FC0E035985790BF64F140068D2AB; uid=NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTI3OTY0NTY5; PP-userInfo={%22access_token%22:%22NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTE2Nzc4NzQxOTE=%22%2C%22vip_deadline%22:null%2C%22expires%22:1680466191%2C%22level%22:%22FREE%22%2C%22discount_code%22:%22GG20OFF%22%2C%22_id%22:%22640253acb032bf5ff0c6b4d0%22%2C%22email%22:%22fernando.atr@outlook.com%22%2C%22username%22:%22fernando.atr@outlook.com%22}',
        device_id: '783908153',
        access_token: 'NjQwMjUzYWNiMDMyYmY1ZmYwYzZiNGQwLTE2Nzc4NzQxOTE=',
      },
    });

    return response.data;
  }
}
