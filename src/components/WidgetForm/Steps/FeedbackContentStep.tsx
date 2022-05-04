import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../CloseButton";
import { ScreenshotButton } from "./ScreenshotButton";

interface FeedbackContentStepsProps {
    feedbackType: FeedbackType;
    onFeedBackRestart: (type: FeedbackType | null) => void;
    setFeedbackSent: () => void;
}


export function FeedbackContentStep({feedbackType, onFeedBackRestart, setFeedbackSent} : FeedbackContentStepsProps){
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('');

    const feedbackTypeInfo = feedbackTypes[feedbackType]; 
    /* FOI FEITO ISSO PARA ACESSAR PROPRIEDADES DO OBJETO, 
    E NÃO SÓ SUA KEY COMO SERIA PASSANDO APENAS {feedbackType} no span*/

    function handleSubmitFeedback(event: FormEvent){
        event.preventDefault();
        console.log({
            screenshot,
            comment,
        })

        setFeedbackSent();
    }
    
    return (
        <div className="w-[calc(100vw-2rem)] md:w-[304px] h-[198px]">
            <header className="flex justify-center items-center">
                <button 
                type="button"
                onClick={() => {
                    {onFeedBackRestart(null)}   
                }}
                className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
                >
                    <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>

                <span className="text-xl leading-6">
                    <div className="flex items-center justify-center gap-2">
                        <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}></img>
                        <p>{feedbackTypeInfo.title}</p>
                    </div>
                </span>

                <CloseButton />
            </header>
            
            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    className="min-w-[250px] w-full min-h-[100px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent resize-none scrollbar-thumb-rounded"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                >
                </textarea>

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshot={screenshot} 
                        onScreenshotTook={setScreenshot}
                    />

                    <button
                     type="submit"
                     className="p-2 bg-brand-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                     disabled={comment.length === 0}
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </div>
    )
}
