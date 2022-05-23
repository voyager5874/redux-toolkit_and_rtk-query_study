import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {userReducer} from "store/reducers/UsersSlice";

const  rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => {
    return configureStore({
       reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
