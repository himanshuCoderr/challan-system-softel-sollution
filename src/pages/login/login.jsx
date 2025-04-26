import React from 'react'
import './login.css';
import { useState } from 'react';
import { login } from '../../services/user';
import { useContext } from 'react';
import { LoginContext } from '../../state/context/LoginContext';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify';


const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { loginStatus, setLoginStatus } = useContext(LoginContext)

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {




    e.preventDefault()
    console.log(formData)
    let userData = await login(formData.username, formData.password)
    console.log(userData.data)
    if (userData.data.status === 1) {
      toast("Logged In")

      setLoginStatus(true)
      
      localStorage.setItem("fullName" , userData.data.data.fullName )
      localStorage.setItem("userId" , userData.data.data.userId )
      localStorage.setItem("token" , userData.data.data.token )

      navigate('/')
    }
    else {
      toast("Check Credentials !!")
      setLoginStatus(false)
    }
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
            <div className='password-container' style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }} >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                required
                maxLength={7}
                minLength={4}
                style={{ width: '85%' }}
              />
              {
                showPassword ? <span onClick={() => {
                  setShowPassword(false)
                }}  > <VisibilityOffIcon /> </span> : <span onClick={() => {
                  setShowPassword(true)
                }}  > <VisibilityIcon /> </span>
              }

            </div>

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