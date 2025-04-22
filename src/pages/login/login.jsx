import React from 'react'
import './login.css';
import { useState } from 'react';
import { login } from '../../services/user';
const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData , [e.target.name] : e.target.value  })
  }

  async function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    let userData = await login(formData.username , formData.password)
    console.log(userData)
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => {
                handleChange(e)
              }}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button"  > 
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;