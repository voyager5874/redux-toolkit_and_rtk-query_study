import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {fetchUsers} from "store/reducers/ActionCreators";
import {PostsContainer} from "components/PostsContainer";

function App() {
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (

        <div className="App">
            <div>
                {isLoading && <h2>Fetching users...</h2>}
                {error && error}
                {users.map(user => <ul>
                    <li className={"user"}><b>{user.name} </b>{user.email}</li>
                </ul>)}
            </div>
            <div>
                <PostsContainer/>
            </div>
        </div>
    );
}

export default App;
