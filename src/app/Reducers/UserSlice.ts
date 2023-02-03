import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../Models/IUser";

interface USerState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: USerState = {
    users: [],
    isLoading: false,
    error: ''
}


export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})


export default UserSlice.reducer;