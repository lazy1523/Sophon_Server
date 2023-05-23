import { Injectable } from '@nestjs/common';

import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class DuneService {
  private readonly requestConfig: AxiosRequestConfig;
  constructor(private readonly httpService: HttpService) {
    this.requestConfig = {
      headers: {
        'x-dune-api-key': process.env.X_DUNE_API_KEY,
        'Content-Type': 'application/json',
      },
    };
  }

  public async getDuneData(): Promise<string> {
    const duneDate = await this.httpService.post(
      'https://api.dune.com/api/v1/query/1258228/execute',
      {},
      this.requestConfig,
    );
    duneDate.subscribe((res: AxiosResponse) => {
      console.log(res);
    });
    return 'duneDate';
  }
}
