import type { LoginCredentials, User } from "./authTypes";
import { mockUsers } from "./mockUsers";

const AUTH_STORAGE_KEY = "cyskills_auth_user";
const SIMULATED_DELAY_MS = 500;

/**
 * Simulates a network delay for mock API calls.
 */
function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Mock login API.
 *
 * Validates credentials against the mock users list.
 * On success, persists the user to sessionStorage and returns the User.
 * On failure, throws an Error with a descriptive message.
 *
 * Replace this function with a real API call when the backend is ready.
 */
export async function loginUser(
    credentials: LoginCredentials
): Promise<User> {
    await delay(SIMULATED_DELAY_MS);

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

    // Strip password before storing/returning
    const { password: _, ...user } = matched;
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    return user;
}

/**
 * Mock logout API.
 *
 * Clears the persisted session.
 * Replace this function with a real API call when the backend is ready.
 */
export async function logoutUser(): Promise<void> {
    await delay(SIMULATED_DELAY_MS / 2);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
}

/**
 * Retrieves the current user from sessionStorage.
 *
 * Used by TanStack Query on app mount to restore the session.
 * Replace this function with a real API call (e.g. /api/me) when the backend is ready.
 */
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

