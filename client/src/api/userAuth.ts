import type { CreateUserRequest } from "../types/DTO/CreateUserRequest";
import type { User } from "../types/User";
import { api } from "./axios";

export const createAccount = async (user: CreateUserRequest): Promise<User> => {
    const res = await api.post('/users', user);
    return res.data;
}