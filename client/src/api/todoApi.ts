import type { ResponseMessage } from "../types/ResponseMessage";
import type { Task } from "../types/Task";
import { api } from "./axios";

export const getTasks = async (): Promise<Task[]> => {
    const res = await api.get("/Tasks");
    return res.data;
};

export const addTask = async (title: String): Promise<ResponseMessage> => {
    const res = await api.post('/Tasks', {
        title,
    });
    return res.data;
};