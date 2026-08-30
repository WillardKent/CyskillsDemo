export type MessageRole = "assistant" | "user";

export interface ChatMessage {
    id: string;
    role: MessageRole;
    content: string;
}

export interface RecentChat {
    id: string;
    title: string;
    messages: ChatMessage[];
}