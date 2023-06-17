import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';

@Injectable()
export class ScraperService {
  async scrapeWebsite() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // 隐藏 cookie 通知
    await page.evaluate(() => {
      const element: any = document.querySelector(
        '.CookieNotification_notification__eiNc2',
      ); // 替换 '.cookie-notice-selector' 为实际的选择器
      if (element) {
        element.style.display = 'none';
      }
    });
    const url = 'https://dune.com/browse/dashboards?q=eth%20staking';
    await page.goto(url, { waitUntil: 'networkidle2' });
    const pdf = await page.pdf({ format: 'A4' });
    writeFileSync('eth.pdf', pdf);

    await browser.close();

    // 现在你的 textContent 变量包含了网页的所有文本，你可以将它保存到文件，或者将它作为HTTP响应返回。
    return pdf;
  }
}
