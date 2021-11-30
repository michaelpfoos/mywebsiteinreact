import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';

const HomeView = (props) => {

    const { page } = props;

    return (
        <div>
            <NavBar page={page} />
            <Home />
        </div>
    );
}

export default HomeView;