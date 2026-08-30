import type { ChatMessage as ChatMessageType } from "../../types/ai";

interface ChatMessageProps {
    message: ChatMessageType;
    assistantName?: string;
}

export default function ChatMessage({
    message,
    assistantName = "CySKILLS Assistant",
}: ChatMessageProps) {
    const isAssistant = message.role === "assistant";

    return (
        <div
            className={`flex w-full ${isAssistant ? "justify-start" : "justify-center"
                }`}
        >
            <div
                className={`flex flex-col gap-2 ${isAssistant ? "max-w-[420px]" : "w-full max-w-[420px]"
                    }`}
            >
                {isAssistant && (
                    <div className="text-sm font-semibold text-[#1A62F8]">
                        ✦ {assistantName}
                    </div>
                )}

                <div
                    className={`rounded-md border border-[#F7F8FA] px-4 py-3 text-sm leading-5 text-[#262C36] font-normal shadow-sm ${isAssistant
                        ? "bg-white"
                        : "bg-[#E8F6FC]"
                        }`}
                >
                    {message.content}
                </div>
            </div>
        </div>
    );
}