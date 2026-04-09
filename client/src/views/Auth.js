import React, { useState } from 'react';
import Login from '../components/auth/Login';
import NavBar from '../components/layout/NavBar';

const Auth = (props) => {

    const { loggedIn, setLoggedIn } = props;

    return(
        <div>
            <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />            
        </div>
    );
}

export default Auth;