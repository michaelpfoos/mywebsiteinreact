import React from 'react';
import styles from './Home.module.css';
import hotairballoon from '../images/mainpage.jpg';

const Home = () => {
    return (
        <div>          
            <div className="container">
                <img className={`${styles.balloon} rounded`} src={hotairballoon} alt="Hot Air Balloon" />
                <p className="mt-5 fs-3 lh-2">Welcome to my home page.  My name is Michael Foos and I am from upstate New York.
                I worked in healthcare IT from 2013 until 2020 and I wanted to try something different.  I also wanted to "create" something that would be mine for the first time in my career.  
                On this page I plan to blog about different programming and development topics as well as my fitness goals.  I will use this blog as a learning vehicle for myself and 
                as a way to develop my own skills and also to reach my goals.  I also welcome feedback, encouragement and criticism from the community. If you are only interested in a particular topic you can use one of the header links.  
                I hope you enjoy your visit and if you'd like feel free to shoot me an <a href="mailto:michaelpfoos@gmail.com">email</a> or comment on one of the blog entires.
                </p>    
            </div>
        </div>
    );
}

export default Home;