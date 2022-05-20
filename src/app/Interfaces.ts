export interface Experience {
    id?: number,
    job: string
}

export interface Skill {
    id?: number,
    technology: string,
    logo: string,
    level: number
}

export interface Project {
    id?: number,
    name: string,
    description: string,
    url: string,
    repo: string
}

export interface User {
    id?: number,
    name: string,
    user: string,
    password: string,
    profesion: string,
    img: string,
    active: boolean
}
