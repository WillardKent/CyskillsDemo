import {
    createContext,
    useMemo,
} from "react";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import type { User, LoginCredentials } from "./authTypes";
import {
    loginUser,
    logoutUser,
    getCurrentUser,
} from "./authApi";

export type AuthContextValue = {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (credentials: LoginCredentials) => void;
    logout: () => void;
    loginError: string | null;
    isLoggingIn: boolean;
};

export const AuthContext = createContext<AuthContextValue | null>(
    null
);

const AUTH_QUERY_KEY = ["auth", "user"] as const;

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const queryClient = useQueryClient();

    // Restore session on mount
    const {
        data: user = null,
        isLoading,
    } = useQuery({
        queryKey: AUTH_QUERY_KEY,
        queryFn: getCurrentUser,
        staleTime: Infinity,
        retry: false,
    });

    // Login mutation
    const loginMutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (loggedInUser) => {
            queryClient.setQueryData(AUTH_QUERY_KEY, loggedInUser);
        },
    });

    // Logout mutation
    const logoutMutation = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            queryClient.setQueryData(AUTH_QUERY_KEY, null);
            queryClient.clear();
        },
    });

    const value = useMemo<AuthContextValue>(
        () => ({
            user,
            isAuthenticated: !!user,
            isLoading,
            login: (credentials: LoginCredentials) =>
                loginMutation.mutate(credentials),
            logout: () => logoutMutation.mutate(),
            loginError: loginMutation.error
                ? loginMutation.error.message
                : null,
            isLoggingIn: loginMutation.isPending,
        }),
        [user, isLoading, loginMutation, logoutMutation]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

