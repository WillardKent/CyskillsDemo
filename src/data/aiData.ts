import type { ChatMessage, RecentChat } from "../types/ai";

export const initialGraduateMessages: ChatMessage[] = [
    {
        id: "1",
        role: "assistant",
        content:
            "Hi Andreas! I've analysed your profile and I can see you're a strong candidate for Data Analyst roles. Your Python and Statistics background aligns exactly with what employers want right now. What would you like to talk through today?",
    },
    {
        id: "2",
        role: "user",
        content: "What should I focus on first to get hired quickly?",
    },
    {
        id: "3",
        role: "assistant",
        content:
            "Great question! Given your profile, here's the fastest path to your first job:\n\n1. Learn SQL first — it's in 78% of data analyst job ads and takes ~4 hours on Khan Academy. This alone qualifies you for dozens more jobs.\n\n2. Apply now, don't wait — Deloitte's Junior Data Analyst role closes in 18 days and employers are hiring today, then improve in parallel.\n\n3. Add a portfolio project — even one Kaggle dataset analysed in Python and uploaded to GitHub separates you from other candidates.",
    },
];

export const defaultRecentChats: RecentChat[] = [
    {
        id: "forecast",
        title: "6 month forecast for Data Analyst...",
        messages: [
            {
                id: "forecast-1",
                role: "assistant",
                content: "Let's look at your 6 month career forecast.",
            },
        ],
    },
    {
        id: "interview",
        title: "Interview prep — Deloitte",
        messages: [
            {
                id: "interview-1",
                role: "assistant",
                content: "Let's prepare for your Deloitte interview.",
            },
        ],
    },
    {
        id: "cv",
        title: "CV review tips",
        messages: [
            {
                id: "cv-1",
                role: "assistant",
                content: "Here are some recommendations for your CV.",
            },
        ],
    },
];
