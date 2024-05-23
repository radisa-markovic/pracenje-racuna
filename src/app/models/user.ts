export interface User {
    id: number | string,
    fullName: string,
    username: string,
    role: string //"admin" | "salesperson" | "operater" | "reporter",
    password: string
};