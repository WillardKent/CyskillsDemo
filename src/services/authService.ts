import type { LoginCredentials, User } from "../types/auth";
import { mockUsers } from "../auth/mockUsers";
import { simulateDelay } from "./apiClient";

const AUTH_STORAGE_KEY = "cyskills_auth_user";

export async function loginUser(credentials: LoginCredentials): Promise<User> {
    await simulateDelay(450);

    const matched = mockUsers.find(
        (u) =>
            u.email === credentials.email &&
            u.password === credentials.password &&
            u.role === credentials.role
    );

    if (!matched) {
        throw new Error(
            "Invalid email or password. Please check your credentials and try again."
        );
    }

    const { password: _, ...user } = matched;
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    return user;
}

export async function logoutUser(): Promise<void> {
    await simulateDelay(200);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
}

export async function getCurrentUser(): Promise<User | null> {
    const stored = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (!stored) return null;

    try {
        return JSON.parse(stored) as User;
    } catch {
        sessionStorage.removeItem(AUTH_STORAGE_KEY);
        return null;
    }
}
