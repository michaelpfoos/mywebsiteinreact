import React from 'react';
import NavBar from '../components/NavBar';

const AboutMeView = (props) => {

    const { page } = props;

    return (
        <div>
            <NavBar coverPage={ true } page={page}/>            
        </div>
    );
}

export default AboutMeView;
