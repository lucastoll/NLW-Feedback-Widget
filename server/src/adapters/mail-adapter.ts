import { Attachment } from "nodemailer/lib/mailer";

export interface SendMailData{
    subject: string;
    attachments: Attachment[];
    body: string;
    to: string;
}

export interface MailAdapter{
    sendMail: (data: SendMailData) => Promise<void>;
}