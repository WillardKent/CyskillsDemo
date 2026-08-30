import { simulateDelay } from "./apiClient";
import { initialGraduateMessages, defaultRecentChats } from "../data/aiData";
import type { ChatMessage, RecentChat } from "../types/ai";

export async function getInitialAiMessages(): Promise<ChatMessage[]> {
    await simulateDelay(200);
    return initialGraduateMessages;
}

export async function getRecentChats(): Promise<RecentChat[]> {
    await simulateDelay(200);
    return defaultRecentChats;
}

export async function sendAiChatMessage(
    message: string,
    _history: ChatMessage[] = []
): Promise<string> {
    await simulateDelay(750);
    return `You asked: "${message}". In production, this connects to the CySKILLS-AI LLM pipeline with ESCO taxonomy alignment and job market live indices.`;
}
