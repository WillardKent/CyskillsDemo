import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import RecentChats from "./RecentChats";

import type {
    ChatMessage as ChatMessageType,
    RecentChat,
} from "../../types/ai";

export interface AiAssistantProps {
    title?: string;
    description?: string;
    assistantName?: string;
    initialMessages?: ChatMessageType[];
    recentChats?: RecentChat[];
    onSendMessage?: (
        message: string,
        messages: ChatMessageType[]
    ) => Promise<string> | string;
}

export default function AiAssistant({
    assistantName = "CySKILLS Assistant",
    initialMessages = [],
    recentChats = [],
    onSendMessage,
}: AiAssistantProps) {
    const [messages, setMessages] =
        useState<ChatMessageType[]>(initialMessages);

    const [activeChatId, setActiveChatId] = useState<string | undefined>(
        undefined
    );

    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async (content: string) => {
        const userMessage: ChatMessageType = {
            id: crypto.randomUUID(),
            role: "user",
            content,
        };

        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);

        if (!onSendMessage) return;

        try {
            setIsLoading(true);

            const response = await onSendMessage(
                content,
                updatedMessages
            );

            const assistantMessage: ChatMessageType = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response,
            };

            setMessages((previousMessages) => [
                ...previousMessages,
                assistantMessage,
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelectChat = (chat: RecentChat) => {
        setActiveChatId(chat.id);
        setMessages(chat.messages);
    };

    return (
        <div className="flex h-full min-h-[600px] flex-col rounded-lg border border-[#F7F8FA] bg-[#F8FAFC] p-3 sm:p-4 font-inter">
            {/* Main Content */}
            <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_350px]">
                {/* Chat Area */}
                <div className="flex min-h-0 flex-col">
                    <div className="flex-1 space-y-4 overflow-y-auto max-h-[600px] pr-1">
                        {messages.map((message) => (
                            <ChatMessage
                                key={message.id}
                                message={message}
                                assistantName={assistantName}
                            />
                        ))}

                        {isLoading && (
                            <div className="flex max-w-[420px] flex-col gap-2">
                                <div className="text-sm font-semibold text-[#1A62F8]">
                                    ✦ {assistantName}
                                </div>

                                <div className="rounded-md border border-[#E5E7EB] bg-white px-4 py-3 text-xs text-[#6B7280]">
                                    Thinking...
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="mt-4">
                        <ChatInput
                            onSend={handleSendMessage}
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Recent Chats */}
                <div className="hidden lg:block border-l border-gray-100 pl-4">
                    <RecentChats
                        chats={recentChats}
                        activeChatId={activeChatId}
                        onSelectChat={handleSelectChat}
                    />
                </div>
            </div>
        </div>
    );
}