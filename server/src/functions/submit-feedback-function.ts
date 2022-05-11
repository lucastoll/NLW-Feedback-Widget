import e from "express";
import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository"

interface SubmitFeedbackFunctionRequest{
    type: string;
    comment: string;
    email: string;
    screenshot?: string;
}

export class SubmitFeedbackFunction{
    constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter, 
    ) {}

    async execute(request: SubmitFeedbackFunctionRequest) {
        const {type, comment, email, screenshot} = request;

        await this.feedbacksRepository.create({
            type,
            comment,
            email,
            screenshot,
        })
        
        await this.mailAdapter.sendMail({
            subject:  'Novo feedback',
            attachments: screenshot ? 
            [
                {
                  filename: 'feedpack.png',
                  path: `${screenshot ? screenshot : "oi"}`
                }
            ] : 
            [

            ],
            body: [
                `<div style="background: #27272a; padding: 20px; font-family: sans-serif;">`,
                    `<h1 style="color: #8257e6; text-align: center">Feedback Widget</h1>`,
                    `<h2 style="color: #8257e6; text-align: center">Informamos que o seu feedback foi registrado com sucesso e enviado para os desenvolvedores.</h2><br><br>`,
                    `<h2 style="color: #8257e6; text-align: center">Tipo do feedback: ${type}</h2>`,
                    `<h2 style="color: #8257e6; text-align: center">Comentario: ${comment}</h2>`,
                    email ?
                    `<h2 style="color: #8257e6; text-align: center">Email de contato: ${email}</h2>`
                    : 
                    '',
                    screenshot ? 
                    `<h2 style="color: #8257e6; text-align: center">Screenshot da tela em anexo</h2>` 
                    : 
                    '',
                    `<br><br><h2 style="font-size: 18px; color: #a1a1aa; text-align: center">© Made by <a href="github.com/lucastoll" target="_blank" style="text-decoration: underline; color: #a1a1aa;">github.com/lucastoll</a></h2>`,
                `</div>`,
            ].join('\n'),
            to: email ? `<${email}>` : '<lucasfernandestolotto@gmail.com>'
        })
    }
}