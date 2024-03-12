export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    profile: Profile;
}

export interface Profile {
    id: string;
    gender: string;
    photo: string;
    domicile: Domicile;
}

export interface Domicile {
    id: number;
    name: string;
}

export interface RegisterUser {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    gender: string;
    photo: string;
    domicileId: number;
}
