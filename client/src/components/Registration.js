import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";


const Registration = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [registered, setRegistered] = useState(false);
    
    const onSubmit = (e) => {
        //code to submit here.
        e.preventDefault();
        const url = process.env.REACT_APP_API_URL + 'api/users/register/';  

        axios.post(url, user) 
        .then((res)=>{
           console.log("res.data", res.data);
           setRegistered(true);
        })
        .catch((err)=>{                   
            setError(err.response.data.message);
            console.log(err.response.data.message)
        });
    }
    
    const onChangeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    return (    
        registered === true ? <Navigate to="/admin/" /> :    
        <div className="container-md">
            <form style={{ maxWidth: "500px" }} onSubmit={onSubmit} className="container-md mt-5 mb-5 p-5 border border-dark border-1">
                <h1 className="text-center">Register your account</h1>
                <label className="form-label">Username: </label>
                <input type="text" name="username" value={user.username} onChange={onChangeHandler} className="form-control" />
                <label className="form-label">Email: </label>
                <input type="text" name="email" value={user.email} onChange={onChangeHandler} className="form-control" />
                <label className="form-label">Password: </label>
                <input type="password" name="password" value={user.password} onChange={onChangeHandler} className="form-control" />
                <label className="form-label">Confirm Password: </label>
                <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={onChangeHandler} className="form-control" />
                <input className="btn btn-secondary mt-3" type="submit" value="Register" />   
                {error !== '' ? <p className="mt-3 fs-5 text-danger">{error}</p> : null }             
            </form>
        </div>       
    );
}

export default Registration;