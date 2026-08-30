import type { AlignmentData, CourseItem } from "../types/hei";
import type { ProgressItem } from "../types/mesy";

export const sampleAlignmentData: AlignmentData[] = [
    {
        label: "Cloud Computing",
        current: [
            { year: "2026", value: 100 },
            { year: "2027", value: 130 },
        ],
        forecast: [
            { year: "2028", value: 175 },
        ],
        projections: [
            { values: [100, 120, 135] },
            { values: [100, 110, 125] },
            { values: [100, 105, 115] },
        ],
    },
    {
        label: "AI/ML Engineering",
        current: [
            { year: "2026", value: 110 },
            { year: "2027", value: 145 },
        ],
        forecast: [
            { year: "2028", value: 190 },
        ],
        projections: [
            { values: [110, 135, 170] },
            { values: [110, 125, 150] },
        ],
    },
    {
        label: "Cybersecurity",
        current: [
            { year: "2026", value: 95 },
            { year: "2027", value: 125 },
        ],
        forecast: [
            { year: "2028", value: 160 },
        ],
        projections: [
            { values: [95, 115, 140] },
            { values: [95, 108, 125] },
        ],
    },
];

export const sampleCurriculumPrograms: ProgressItem[] = [
    {
        label: "MSc Data Science & AI",
        percentage: 90,
        gradient: "bg-[linear-gradient(225deg,#68DBF2_0.01%,#1A62F8_100%)]",
    },
    {
        label: "BSc Electrical Eng",
        percentage: 75,
        gradient: "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "MSc Cybersecurity",
        percentage: 48,
        gradient: "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "BSc Computer Science",
        percentage: 100,
        gradient: "bg-[linear-gradient(225deg,#F27868_0.01%,#F55050_100%)]",
    },
];

export const sampleCourses: CourseItem[] = [
    {
        id: "cs101",
        code: "CS 101",
        title: "Introduction to Programming",
        status: "info",
        tags: ["Python", "Algorithms", "Basics"],
    },
    {
        id: "cs202",
        code: "CS 202",
        title: "Database Management Systems",
        status: "info",
        tags: ["SQL", "Data Modeling", "Relational"],
    },
    {
        id: "cs305",
        code: "CS 305",
        title: "Enterprise Java Architecture",
        status: "warning",
        tags: ["Java EE", "Legacy", "Monoliths"],
    },
    {
        id: "cs408",
        code: "CS 408",
        title: "Cloud Computing & DevOps",
        status: "danger",
        tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
        id: "cs420",
        code: "CS 420",
        title: "Machine Learning in Production",
        status: "danger",
        tags: ["MLOps", "Model Deployment", "PyTorch"],
    },
];
