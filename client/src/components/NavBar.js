import React from 'react';
import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import AboutMe from './AboutMe';
import axios from 'axios';

const NavBar = (props) => {    

    const { coverPage, page, loggedIn, setLoggedIn } = props;

    const logout = (e) => {
        e.preventDefault();

        const url = process.env.REACT_APP_API_URL + 'api/users/logout/';  

        axios.post(url, {}, {
            withCredentials: true
        })
            .then((res)=>{
                console.log(res.data);  
                setLoggedIn(false);              
            })
            .catch((err)=>{
                console.log(err);
            });
    }

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
                        {
                            loggedIn === false ? null :
                            <li className="nav-item">                            
                                <Link to="/post/" className={page === 'post' ? "fs-4 nav-link fw-bold active" : "fs-4 nav-link fw-bold"}>Post</Link>                            
                            </li>                                              
                        }
                        {
                            loggedIn === false ? null :
                            <li className="nav-item">                            
                                <a to="/post/" href="logout" onClick={logout} className="fs-4 nav-link fw-bold">Logout</a>                            
                            </li>                                              
                        }

                    </ul>            
                </div>
            </div>
        </nav>
        {page === 'aboutMe'? <AboutMe /> :null}    
    </div>  
    );
}

export default NavBar;