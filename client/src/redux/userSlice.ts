import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type User } from "../types/User"

type UserState = {
    token: string | null,
    user: User | null,
}

const initialState: UserState = {
    token: null,
    user: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    }
});

export const { setUser, setToken, logout } = userSlice.actions;
export default userSlice.reducer;