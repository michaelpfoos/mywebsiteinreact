import React from 'react';
import Registration from '../components/Registration';
import NavBar from '../components/NavBar';


const Register = (props) => {

    const { loggedIn, setLoggedIn } = props;
    
    return (
        <div>
            <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Registration />
        </div>
    );
}

export default Register;