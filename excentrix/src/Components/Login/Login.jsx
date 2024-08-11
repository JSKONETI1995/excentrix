import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate} from 'react-router-dom'

import Axios from "axios"
const Login = () => {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
const navigate = useNavigate()
Axios.defaults.withCredentials

  const handleSubmit = () => {
    e.preventDefault();
    Axios.Post("http://localhost:3000/auth/Login",{
      email,
      password,
    }).then(response =>{
      navigate('/home')
    }) .catch(err=> {
      console.log(err)
    })

  }

  return (
    <div className='sign-up-container' onSubmit={handleSubmit}>
        <form className='sign-up-form'>
        <h2>Login</h2> 
            
            <label htmlFor="email">Email:</label>
            <input type="email" autoComplete='off' placeholder='Your email...' onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
            <p><Link to="/forgotPassword ">ForgotPassword?</Link></p>
            <p>Don't Have account?  <Link to="/Register">Signup</Link></p>
        </form>
      
    </div>
  )
}

export default Login
