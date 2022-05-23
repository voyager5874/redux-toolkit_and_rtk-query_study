import {UserType} from "models/User";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceStateType = {
    users: UserType[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: UserSliceStateType = {
    users: [] as UserType[],
    isLoading: false,
    error: '',
    count: 0,
}

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>){
           state.count += action.payload
        }
    }
})

export const userReducer = usersSlice.reducer