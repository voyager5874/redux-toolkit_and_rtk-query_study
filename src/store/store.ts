import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {userReducer} from "store/reducers/UsersSlice";
import {postAPI} from "services/postService";

const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
