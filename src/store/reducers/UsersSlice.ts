import {UserType} from "models/User";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "store/reducers/ActionCreators";

type UserSliceStateType = {
    users: UserType[];
    isLoading: boolean;
    error: string;
}

const initialState: UserSliceStateType = {
    users: [] as UserType[],
    isLoading: false,
    error: '',
}

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<UserType[]>) => {
            state.users = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },

    }
})

export const userReducer = usersSlice.reducer