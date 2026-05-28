export declare class EmailService {
    private readonly logger;
    private resend;
    constructor();
    sendEmail(to: string, subject: string, html: string): Promise<import("resend").CreateEmailResponse>;
}
