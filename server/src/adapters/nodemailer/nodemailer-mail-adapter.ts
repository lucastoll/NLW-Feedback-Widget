import { MailAdapter, SendMailData } from "../mail-adapter"
import nodemailer from 'nodemailer';
import { BORDER_STYLE } from "html2canvas/dist/types/css/property-descriptors/border-style";

/* SERVIÇO DE EMAIL */

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "981e7f7f36e0c1",
      pass: "00c192d608f4d3"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Lucas Tolotto <lucasfernandestolotto@gmail.com>',
            subject,
            html: body,
        })
    };
}

