import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY || 're_123'); // Ensure this is in .env
  }

  async sendEmail(to: string, subject: string, html: string) {
    try {
      const data = await this.resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'Cúspidea <onboarding@resend.dev>', // Should use verified domain
        to,
        subject,
        html,
      });
      return data;
    } catch (error) {
      this.logger.error('Error sending email', error);
      throw error;
    }
  }
}
