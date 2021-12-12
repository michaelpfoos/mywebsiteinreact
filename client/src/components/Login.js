import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [loggedin, setLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const login = (e) => {
        e.preventDefault();
        const url = process.env.REACT_APP_API_URL + 'api/users/login/';        

        axios.post(url, credentials, { withCredentials: true })
        .then((res)=>{
            console.log(res, "res");
            console.log(res.data);
            setUserId(res.data.userId);
            setLoggedIn(true);
        })
        .catch((err)=>{
            console.log(err);   
            setError(err.response.data.message);         
        });
    }

    return (
        loggedin === true ? <Navigate to="/post/" state={{ url_id: userId }} /> :
        <div className="container-md">
            <form style={{ maxWidth: "500px" }} className="container-md mt-5 mb-5 p-5 border border-dark border-1" onSubmit={login}>
                <h1 className="text-center">Login Page</h1>
                <label className="form-label">Username: </label>
                <input type="text" className="form-control" onChange={changeHandler} name="username" />
                <label className="form-label">Password: </label>
                <input type="password" className="form-control" onChange={changeHandler} name="password" />
                <input className="btn btn-secondary mt-3" type="submit" value="Login" />               
                <Link to="/register/" className="btn btn-secondary mt-3 ms-3">Register</Link>     
                {!error ? null : <p className='mt-3 fs-5 text-danger' >{error}</p>}           
            </form>
        </div>
    );
}

export default Login;