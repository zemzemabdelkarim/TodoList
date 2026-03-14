import type { User } from "../../User"

export type LoginResponse = {
    userResponse: User,
    token: string,
}