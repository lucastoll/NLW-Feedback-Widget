import express from 'express'
import { SubmitFeedbackFunction } from './functions/submit-feedback-function';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router();

routes.post('/feedbacks', async (requisiton, response) => {

    response.setHeader('Access-Control-Allow-Credentials', 'true')
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    response.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    if (requisiton.method === 'OPTIONS') {
        response.status(200).end()
      return
    }

    const { type, comment, email, screenshot } = requisiton.body


    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    
    const submitFeedbackFunctionRequest = new SubmitFeedbackFunction(
        prismaFeedbacksRepository,
        nodemailerMailAdapter,
    )

    await submitFeedbackFunctionRequest.execute({
        type,
        comment,
        email,
        screenshot,
    })

    return response.status(201).send()
})
  
