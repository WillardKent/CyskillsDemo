import type { User } from "./authTypes";

/**
 * Predefined mock user accounts — one per role.
 * All passwords are "password" for demo purposes.
 */
export const mockUsers: (User & { password: string })[] = [
    {
        id: "user-mesy-1",
        name: "Maria Papadopoulou",
        email: "mesy@gov.cy",
        password: "password",
        role: "mesy",
        title: "DHE · Policy Analyst",
    },
    {
        id: "user-grad-1",
        name: "Andreas Nicolaou",
        email: "graduate@ucy.ac.cy",
        password: "password",
        role: "graduate",
        title: "BSc Computer Science · 2025",
    },
    {
        id: "user-hei-1",
        name: "Elena Christodoulou",
        email: "hei@cut.ac.cy",
        password: "password",
        role: "hei",
        title: "CUT · Institutional Analyst",
    },
];

