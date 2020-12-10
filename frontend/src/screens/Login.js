import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login(){

    const history = useHistory();

    const [ loginData, setLoginData ] = useState({
        emailAddress: "",
        password: ""
    });

    const handleChange = (event) => {
        setLoginData({
        ...loginData,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_DATABASE_URL}/auth/users/login`, loginData)
        .then(response => {
            setLoginData(response.data);
            history.push('/dashboard');
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)} className="login-form"> 
            <h2>Log In</h2>
                <label>Company Code:</label>
                    <input 
                    name="companyCode"
                    type="text"
                    onChange={(event) => handleChange(event)}
                    />
                <br/>
                <label>Email Address:</label>
                    <input 
                    name="emailAddress"
                    type="text"
                    onChange={(event) => handleChange(event)}
                    />
                <br/>
                <label>Password:</label>
                    <input 
                    name="password"
                    type="password"
                    onChange={(event) => handleChange(event)}
                    />
                <br/>
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
}

export default Login;