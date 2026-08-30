import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './auth/AuthProvider'
import { ToastProvider } from './context/ToastContext'
import { SidebarProvider } from './context/SidebarContext'
import App from './App.tsx'
import "./index.css"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <ToastProvider defaultPosition="top-right">
                    <SidebarProvider>
                        <App />
                    </SidebarProvider>
                </ToastProvider>
            </AuthProvider>
        </QueryClientProvider>
    </StrictMode>,
)
