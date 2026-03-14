import type { CreateUserRequest } from "../types/DTO/CreateUserRequest";
import type { LoginRequest } from "../types/DTO/requests/LoginRequest";
import type { LoginResponse } from "../types/DTO/responses/LoginResponse";
import type { User } from "../types/User";
import { api } from "./axios";

export const createAccount = async (user: CreateUserRequest): Promise<User> => {
    const res = await api.post('/users', user);
    return res.data;
}

export const login = async (req: LoginRequest): Promise<LoginResponse> => {
    const res = await api.post('/auth/login', req);
    return res.data;
}