import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const emtpyCredentials = {
  username: '',
  password: '',
}

const Login = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState(emptyCredentials);

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.data.payload))
        history.pushState('/protected')
      })
      .catch(err => console.log(error.response));
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={handleSubmit}>  
          <input
            type="text"
            name="username"
            placeholder="Name"
            maxLength="20"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            maxLength="20"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
