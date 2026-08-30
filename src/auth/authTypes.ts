export type UserRole = "mesy" | "graduate" | "hei";

export type User = {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    title: string;
    avatar?: string;
};

export type LoginCredentials = {
    email: string;
    password: string;
    role: UserRole;
};

export type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
};

