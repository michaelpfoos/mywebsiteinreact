import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import {Helmet} from "react-helmet";

const HomeView = (props) => {

    const { page, loggedIn, setLoggedIn, title } = props;

    return (        
        <div> 
            <Helmet title={title} />                
            <NavBar page={page} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Home />
        </div>
    );
}

export default HomeView;