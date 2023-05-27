import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HomeService {
  constructor(private configService: ConfigService) { }

  appInfo() {
    // 等待3秒后再返回
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: this.configService.get('app.name'),
          version: this.configService.get('app.version'),
          description: this.configService.get('app.description'),
        });
      }, 3000);
    });


  }
}
