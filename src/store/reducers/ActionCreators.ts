import axios from "axios";
import {UserType} from "models/User";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(usersSlice.actions.usersFetching())
//         const response = await axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(usersSlice.actions.usersFetchingSuccess(response.data))
//     }catch(error){
//         dispatch(usersSlice.actions.usersFetchingError((error as AxiosError).message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('не удалось загрузить')
        }

    }
)