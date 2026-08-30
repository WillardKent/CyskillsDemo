export type UserRole = "mesy" | "graduate" | "hei";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    title: string;
    avatar?: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
    role: UserRole;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

export interface GraduateEditData {
    role: "graduate";
    name: string;
    degree: string;
    uoc: string;
    academicBackground: {
        university: string;
        graduationYear: string;
        degree: string;
        iscedField: string;
    };
    skills: string[];
}

export interface HeiEditData {
    role: "hei";
    name: string;
    user: string;
    institutionDetails: {
        institutionType: string;
        country: string;
        established: string;
        website: string;
        contactEmail: string;
        phone: string;
    };
    facultiesAndPrograms: string[];
}

export interface MesyEditData {
    role: "mesy";
    name: string;
    user: string;
    ministryInfo: {
        ministryName: string;
        role: string;
        department: string;
        contactEmail: string;
        phone: string;
    };
}

export type EditProfileData = GraduateEditData | HeiEditData | MesyEditData;
