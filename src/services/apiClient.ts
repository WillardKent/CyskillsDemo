import type { ApiResponse, ApiError, RequestOptions } from "../types/api";

const API_BASE_URL = (import.meta as { env?: Record<string, string> }).env?.VITE_API_BASE_URL || "/api";
const AUTH_STORAGE_KEY = "cyskills_auth_user";

/**
 * Simulates a realistic network latency for mock data responses.
 */
export function simulateDelay(ms: number = 400): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Base HTTP client supporting future REST API integration.
 * In the current phase, services invoke this client or return typed mock data.
 */
export async function apiClient<T>(
    endpoint: string,
    options: RequestOptions & Omit<RequestInit, "headers"> = {}
): Promise<T> {
    const {
        headers = {},
        params,
        requiresAuth = true,
        ...fetchOptions
    } = options;

    let url = `${API_BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

    if (params) {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                searchParams.append(key, String(value));
            }
        });
        const query = searchParams.toString();
        if (query) {
            url += `?${query}`;
        }
    }

    const requestHeaders: Record<string, string> = {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
    };

    if (requiresAuth) {
        try {
            const stored = sessionStorage.getItem(AUTH_STORAGE_KEY);
            if (stored) {
                const user = JSON.parse(stored);
                if (user?.token) {
                    requestHeaders.Authorization = `Bearer ${user.token}`;
                }
            }
        } catch {
            // ignore session read errors
        }
    }

    const response = await fetch(url, {
        ...fetchOptions,
        headers: requestHeaders,
    });

    if (!response.ok) {
        const errorData: ApiError = {
            statusCode: response.status,
            message: `Request failed with status ${response.status}`,
        };
        try {
            const parsed = await response.json();
            if (parsed.message) errorData.message = parsed.message;
            if (parsed.errors) errorData.errors = parsed.errors;
        } catch {
            // non-JSON response
        }
        throw errorData;
    }

    const data: ApiResponse<T> | T = await response.json();
    return (data as ApiResponse<T>).data !== undefined
        ? (data as ApiResponse<T>).data
        : (data as T);
}
