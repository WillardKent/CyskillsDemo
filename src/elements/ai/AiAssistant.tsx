import { useState } from "react";
import { X } from "lucide-react";
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
    const [showRecentModal, setShowRecentModal] = useState(false);

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
        setShowRecentModal(false);
    };

    return (
        <div className="flex h-full min-h-[600px] flex-col rounded-lg border border-[#F7F8FA] bg-[#F8FAFC] p-3 sm:p-4 font-inter">
            {/* Recent Button — mobile/tablet only */}
            {recentChats.length > 0 && (
                <div className="lg:hidden mb-3">
                    <button
                        type="button"
                        onClick={() => setShowRecentModal(true)}
                        className="rounded-md border border-[#E1E4E9] bg-white px-4 py-2 text-sm font-medium text-[#262C36] hover:bg-[#F9FAFB] transition"
                    >
                        Recent
                    </button>
                </div>
            )}

            {/* Recent Chats Modal — mobile/tablet only */}
            {showRecentModal && (
                <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/30"
                        onClick={() => setShowRecentModal(false)}
                    />

                    {/* Modal */}
                    <div className="relative z-10 w-full max-w-sm rounded-lg bg-white shadow-xl max-h-[70vh] flex flex-col">
                        <div className="flex items-center justify-between px-6 pt-5 pb-2">
                            <h2 className="text-base font-medium text-[#262C36]">
                                Recent Chats
                            </h2>

                            <button
                                type="button"
                                onClick={() => setShowRecentModal(false)}
                                className="rounded-md p-1 text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] transition"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 pb-5">
                            <div className="flex flex-col gap-1">
                                {recentChats.map((chat) => {
                                    const isActive = chat.id === activeChatId;

                                    return (
                                        <button
                                            key={chat.id}
                                            type="button"
                                            onClick={() => handleSelectChat(chat)}
                                            className={`w-full truncate rounded text-left py-3 text-sm font-normal transition ${
                                                isActive
                                                    ? "text-[#2563B8]"
                                                    : "text-[#464855] hover:bg-[#F9FAFB]"
                                            }`}
                                        >
                                            {chat.title}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}

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

                {/* Recent Chats — desktop sidebar */}
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