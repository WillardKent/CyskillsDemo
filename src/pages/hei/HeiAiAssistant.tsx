import HeaderBanner from "../../elements/HeaderBanner";
import AiAssistant from "../../elements/ai/AiAssistant";
import { initialGraduateMessages, defaultRecentChats } from "../../data/aiData";
import { sendAiChatMessage } from "../../services/aiService";
import type { ChatMessage } from "../../types/ai";

export default function HeiAiAssistant() {
    const handleSendMessage = async (
        message: string,
        messages: ChatMessage[]
    ): Promise<string> => {
        return await sendAiChatMessage(message, messages);
    };

    return (
        <div className="flex flex-col w-full gap-2 font-inter">
            <HeaderBanner
                breadcrumb="AI Assistant"
                title="AI Assistant"
                description="Ask anything about curriculum restructuring, market demand trends, or accreditation metrics."
            />

            <AiAssistant
                assistantName="CySKILLS HEI Assistant"
                initialMessages={initialGraduateMessages}
                recentChats={defaultRecentChats}
                onSendMessage={handleSendMessage}
            />
        </div>
    );
}