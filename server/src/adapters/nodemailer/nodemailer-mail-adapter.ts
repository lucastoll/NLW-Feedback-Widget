import { MailAdapter, SendMailData } from "../mail-adapter"
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  service: "Gmail",
  auth: {
    user: process.env.NICKEMAIL,
    pass: process.env.NICKPASSWORD,
  },
  tls: { rejectUnauthorized: false }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body, attachments, to}: SendMailData){
        await transporter.sendMail({
            from: `<${process.env.NICKEMAIL}>`,
            to,
            subject,
            html: body,
            attachments,
        })
    };
}


