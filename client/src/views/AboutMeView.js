import React from 'react';
import NavBar from '../components/NavBar';
import {Helmet} from "react-helmet";

const AboutMeView = (props) => {

    const { page, loggedIn, setLoggedIn, title } = props;

    return (
        <div>
            <Helmet title={title} />  
            <NavBar coverPage={ true } page={page} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />            
        </div>
    );
}

export default AboutMeView;
