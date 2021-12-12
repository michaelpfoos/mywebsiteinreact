import React from 'react';
import styles from './AboutMe.module.css';
import michaelfoos from '../images/michaelfoos.jpg';

const AboutMe = () => {

    return (
        <div className="container">    
                <div className="row">                  
                    <div className="col col-xlg-2 d-flex align-items-center">
                        <div className="d-flex align-items-center">                            
                            <p className="text-dark fs-5 fw-bold text-white fs-5 lh-lg"><img src={michaelfoos} id="myphoto" alt="Michael Foos" className={`${styles.myphoto} rounded me-3 float-start`} />I began my journey towards becoming a web developer three years ago when I was writing SQL Queries for UHS.  I realized how much I enjoy coding.  Soon after I picked up a copy of HTML &  CSS: Design and Build Web Sites by John Ducket
                                and I was hooked. These days I actively look for problems that I can fix with code.  Whether it be automating a test case with Java,
                                or automating a video game I play to get more drops I am always looking for the edge programming can give me.</p>                               
                        </div>
                    </div>                                 
                </div>
                <div className="row">                                      
                    <div className="col d-flex justify-content-center">
                    <table className="w-50 table table-striped table-dark table-hover table-bordered table-sm">
                        <tbody>
                            <tr>
                                <th>Technology</th>
                                <th>Proficiency</th>
                            </tr>
                            <tr>
                                <td>HTML</td>
                                <td>
                                    <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow='70' aria-valuemin='0' aria-valuemax='100'></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td>
                                    <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "75%"}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Javascript</td>
                                <td>
                                    <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "75%"}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>React</td> 
                                <td>
                                    <div className="progress">
                                    <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "50%"}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </td>               
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>
                                    <div className="progress">
                                    <div className="progress-bar  bg-secondary progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "50%"}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>PHP</td>    
                                <td>
                                    <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "75%"}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </td>            
                            </tr>
                            <tr>
                                <td>SQL</td>
                                <td>
                                    <div className="progress">
                                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "80%"}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>                                   
                </div>                                    
            </div> 
            <div className="row mt-5">
                    <div className="col">
                        <a href="mailto:michaelpfoos@gmail.com" className="btn btn-outline-dark border-0 text-white fs-4 text-decoration-none"><i className="bi bi-envelope"></i> Email</a>                        
                    </div>
                    <div className="col">   
                        <a href="http://linuxhome:8000/files/MichaelPFoos.docx" className="btn btn-outline-dark border-0 text-white fs-4 text-decoration-none"><i className="bi bi-file-earmark-word"></i> My Resume</a>                                               
                    </div>
                    <div className="col"> 
                        <a href="https://github.com/michaelpfoos" className="btn btn-outline-dark border-0 text-white fs-4 text-decoration-none"><i className="bi bi-github"></i> Github</a>                       
                    </div>
                    <div className="col">
                        <a href="https://www.linkedin.com/in/michael-foos/" className="btn btn-outline-dark border-0 text-white fs-4 text-decoration-none"><i className="bi bi-linkedin"></i> LinkedIn</a>                  
                    </div>                  
                </div> 
            </div>              
    )
}

export default AboutMe;