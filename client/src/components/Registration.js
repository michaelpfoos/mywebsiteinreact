import React from 'react';

const Registration = () => {
    return (        
        <div className="container-md">
            <form style={{ maxWidth: "500px" }}className="container-md mt-5 mb-5 p-5 border border-dark border-1">
                <h1 className="text-center">Register your account</h1>
                <label className="form-label">Username: </label>
                <input type="text" className="form-control" />
                <label className="form-label">Email: </label>
                <input type="text" className="form-control" />
                <label className="form-label">Password: </label>
                <input type="password" className="form-control" />
                <label className="form-label">Confirm Password: </label>
                <input type="password" className="form-control" />
                <input className="btn btn-primary mt-3" type="submit" value="Register" />                
            </form>
        </div>       
    );
}

export default Registration;