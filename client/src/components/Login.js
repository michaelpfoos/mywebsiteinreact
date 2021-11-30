import React from 'react';

const Login = () => {
    return (
        <div className="container-md">
            <form style={{ maxWidth: "500px" }}className="container-md mt-5 mb-5 p-5 border border-dark border-1">
                <h1 className="text-center">Login Page</h1>
                <label className="form-label">Username: </label>
                <input type="text" className="form-control" />
                <label className="form-label">Password: </label>
                <input type="password" className="form-control" />
                <input className="btn btn-primary mt-3" type="submit" value="Login" />
                <input className="btn btn-primary mt-3 ms-3" type="button" value="Register" />
            </form>
        </div>
    );
}

export default Login;