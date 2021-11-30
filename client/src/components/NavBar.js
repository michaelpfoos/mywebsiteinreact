import React from 'react';
import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import AboutMe from './AboutMe';

const NavBar = (props) => {    

    const { coverPage, page } = props;

    return (        
    <div className={coverPage === true ? `container-fluid ${styles.eriefullscreen}` : `container-fluid ${styles.erie}` }>            
        <div className={`container-fluid ${styles.overlay}`} ></div>
        <nav className="navbar navbar-dark navbar-expand-md">
            <div className="container-fluid">                
                <Link to="/" className="navbar-brand fw-bold">Michael Foos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">  
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className={page === 'home' ? "fs-4 nav-link fw-bold active" : "fs-4 nav-link fw-bold"}>Home</Link>                           
                        </li>
                        <li className="nav-item">                           
                            <Link to="/aboutme/" className={page === 'aboutMe' ? "fs-4 nav-link fw-bold active" : "fs-4 nav-link fw-bold"}>About Me</Link>
                        </li>   
                        <li className="nav-item">                            
                            <Link to="/blog/" className={page === 'blog' ? "fs-4 nav-link fw-bold active" : "fs-4 nav-link fw-bold"}>Blog</Link>
                        </li>                                                       
                    </ul>            
                </div>
            </div>
        </nav>
        {page === 'aboutMe'? <AboutMe /> :null}    
    </div>  
    );
}

export default NavBar;