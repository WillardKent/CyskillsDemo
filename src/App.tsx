import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

/**
 * App is now a thin wrapper that renders the TanStack Router.
 * The actual layout (Sidenav + Header + content) lives in the
 * root route's component inside router.tsx.
 */
export default function App() {
    return <RouterProvider router={router} />;
}
