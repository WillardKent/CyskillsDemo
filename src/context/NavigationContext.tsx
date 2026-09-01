import { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import type { LearningPathData } from "../types/learningPath";
import type { JobData } from "../types/jobData";
import { PAGE_PATH_MAP } from "../config/navigation";

interface NavigationContextValue {
    selectedLearningPath: LearningPathData | null;
    selectLearningPath: (path: LearningPathData) => void;
    selectedJob: JobData | null;
    selectJob: (job: JobData) => void;
    savedJobs: JobData[];
    toggleSaveJob: (job: JobData) => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();

    const [selectedLearningPath, setSelectedLearningPath] = useState<LearningPathData | null>(null);
    const [selectedJob, setSelectedJob] = useState<JobData | null>(null);
    const [savedJobs, setSavedJobs] = useState<JobData[]>([]);

    const selectLearningPath = useCallback((path: LearningPathData) => {
        setSelectedLearningPath(path);
        navigate({ to: PAGE_PATH_MAP["skill-insight-detail"] });
    }, [navigate]);

    const selectJob = useCallback((job: JobData) => {
        setSelectedJob(job);
        navigate({ to: PAGE_PATH_MAP["job-detail"] });
    }, [navigate]);

    const toggleSaveJob = useCallback((job: JobData) => {
        setSavedJobs((prev) => {
            const exists = prev.some(
                (j) => j.title === job.title && j.company === job.company
            );
            return exists
                ? prev.filter((j) => !(j.title === job.title && j.company === job.company))
                : [...prev, job];
        });
    }, []);

    return (
        <NavigationContext.Provider
            value={{
                selectedLearningPath,
                selectLearningPath,
                selectedJob,
                selectJob,
                savedJobs,
                toggleSaveJob,
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
}

export function useAppNavigation() {
    const ctx = useContext(NavigationContext);
    if (!ctx) {
        throw new Error("useAppNavigation must be used within a NavigationProvider");
    }
    return ctx;
}

