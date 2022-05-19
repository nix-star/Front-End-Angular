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