import React from 'react';
import './App.css';
import {usersSlice} from "store/reducers/UsersSlice";
import {useAppDispatch, useAppSelector} from "hooks/redux";

function App() {
    const {count} = useAppSelector(state => state.userReducer)
    const {increment} = usersSlice.actions
    const dispatch = useAppDispatch()
    return (

        <div className="App">
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment(5))}>increment</button>
        </div>
    );
}

export default App;
