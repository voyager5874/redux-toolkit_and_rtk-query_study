import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {fetchUsers} from "store/reducers/ActionCreators";

function App() {
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (

        <div className="App">
            {isLoading && <h2>Fetching users...</h2>}
            {error && error}
            {users.map(user => <ul>
                <li><b>{user.name} </b>{user.email}</li>
            </ul>)}
        </div>
    );
}

export default App;
