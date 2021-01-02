import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

function Signup() {

    const history = useHistory();

    const [individual, setIndividual] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        emailaddress: "",
        companyname: "",
    });

    const handleChange = (event) => {
        setIndividual({
        ...individual,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post(`${process.env.REACT_APP_DATABASE_URL}/auth/users/register`, individual)
      .then(response => {
        setIndividual(response.data);
        history.push('/login');  
      })
      .catch(error => {
          console.log(error);
      });
  }

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)} className="signup-form">
        <h2>Join your company area</h2>

        <label>Company Name:</label>
        <input
          name="companyname"
          onChange={(event) => handleChange(event)}
          placeholder="Company Name:"
        />
        <br />

        <label>Email:</label>
        <input
          name="emailaddress"
          onChange={(event) => handleChange(event)}
          placeholder="Email:"
        />
        <br />

        <label>Username:</label>
        <input
          name="username"
          onChange={(event) => handleChange(event)}
          placeholder="Username:"
        />
        <br />

        <label>First Name:</label>
        <input
          name="firstname"
          onChange={(event) => handleChange(event)}
          placeholder="First Name:"
        />
        <br />

        <label>Last Name:</label>
        <input
          name="lastname"
          onChange={(event) => handleChange(event)}
          placeholder="Last Name:"
        />
        <br />

        <label>Password:</label>
        <input
          name="password"
          type="password"
          onChange={(event) => handleChange(event)}
          placeholder="Password:"
        />
        <br />

        <input type="submit" value="Go" />
      </form>
    </div>
  );
}

export default Signup;
