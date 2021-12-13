import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';

const HomeView = (props) => {

    const { page, loggedIn, setLoggedIn } = props;

    return (
        <div>
            <NavBar page={page} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Home />
        </div>
    );
}

export default HomeView;