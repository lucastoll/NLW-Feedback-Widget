export interface FeedbackCreateData {
    type: string;
    comment: string;
    email?: string;
    screenshot?: string;
}

export interface FeedbacksRepository{
    create: (data: FeedbackCreateData) => Promise<void>;
}