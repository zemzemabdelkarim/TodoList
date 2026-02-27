import type { Task } from "../types/Task";
import { api } from "./axios";

export const getTasks = async (): Promise<Task[]> => {
    const res = await api.get("/Tasks");
    return res.data;
}