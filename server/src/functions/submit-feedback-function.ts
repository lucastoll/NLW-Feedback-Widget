import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository"

interface SubmitFeedbackFunctionRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackFunction{
    constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter, 
    ) {}

    async execute(request: SubmitFeedbackFunctionRequest) {
        const {type, comment, screenshot} = request;

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject:  'Novo feedback',
            body: [
                `<div>`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentario: ${comment}</p>`,
                `</div>`,
            ].join('\n')
        })
    }
}