import React from 'react';
import NavBar from '../components/NavBar';

const AboutMeView = (props) => {

    const { page, loggedIn, setLoggedIn } = props;

    return (
        <div>
            <NavBar coverPage={ true } page={page} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />            
        </div>
    );
}

export default AboutMeView;
