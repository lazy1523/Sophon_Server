import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class ResendService {
  private resend: Resend;
  constructor() {
    this.resend = new Resend(process.env.RESEND_KEY);
  }
  /**
   * 通过Resend 发送邮件
   * @param email
   * @param subject
   * @param text
   */
  public async sendEmail(to_email: string, subject: string, html: string) {
    await this.resend.sendEmail({
      from: 'DataEcho<noreply@dataecho.info>',
      to: to_email,
      subject: subject,
      html: html,
    });
  }
}
