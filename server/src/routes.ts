import express from 'express'
import { SubmitFeedbackFunction } from './functions/submit-feedback-function';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router();

routes.post('/feedbacks', async (requisiton, response) => {
    const { type, comment, screenshot } = requisiton.body


    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    
    const submitFeedbackFunctionRequest = new SubmitFeedbackFunction(
        prismaFeedbacksRepository,
        nodemailerMailAdapter,
    )

    await submitFeedbackFunctionRequest.execute({
        type,
        comment,
        screenshot,
    })

    return response.status(201).send()
})

