import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import type { AuthContextValue } from "./AuthProvider";

/**
 * Convenience hook to access the auth context.
 * Must be used within an AuthProvider.
 */
export function useAuth(): AuthContextValue {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used within an AuthProvider. " +
            "Wrap your app with <AuthProvider> in main.tsx."
        );
    }

    return context;
}

