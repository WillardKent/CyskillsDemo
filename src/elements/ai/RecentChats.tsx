import type { RecentChat } from "../../types/ai";

interface RecentChatsProps {
    chats: RecentChat[];
    activeChatId?: string;
    onSelectChat: (chat: RecentChat) => void;
}

export default function RecentChats({
    chats,
    activeChatId,
    onSelectChat,
}: RecentChatsProps) {
    return (
        <aside className="h-full rounded-md border border-[#F7F8FA] bg-white px-6 py-5 font-inter">
            <h2 className="text-sm font-medium text-[#262C36] pb-2">
                Recent Chats
            </h2>

            <div className="flex flex-col gap-1">
                {chats.map((chat) => {
                    const isActive = chat.id === activeChatId;

                    return (
                        <button
                            key={chat.id}
                            type="button"
                            onClick={() => onSelectChat(chat)}
                            className={`w-full truncate rounded text-left py-2 text-xs font-normal transition ${isActive
                                ? " text-[#2563B8]"
                                : "text-[#888888] hover:bg-[#F9FAFB]"
                                }`}
                        >
                            {chat.title}
                        </button>
                    );
                })}
            </div>
        </aside>
    );
}