import React from 'react';
import Login from '../components/Login';
import Registration from '../components/Registration';
import NavBar from '../components/NavBar';

const Auth = () => {
    return(
        <div>
            <NavBar />
            <Login />
            <Registration />
        </div>
    );
}

export default Auth;