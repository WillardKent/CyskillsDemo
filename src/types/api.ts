export interface ApiResponse<T = unknown> {
    success: boolean;
    data: T;
    message?: string;
    errors?: string[];
    timestamp: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

export interface ApiError {
    statusCode: number;
    message: string;
    errors?: string[];
}

export interface RequestOptions {
    headers?: Record<string, string>;
    params?: Record<string, string | number | boolean | undefined>;
    requiresAuth?: boolean;
}
