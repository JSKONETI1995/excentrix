
import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate} from 'react-router-dom'

import Axios from "axios"
const Register = () => {

  const[userName, setuserName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
const navigate = useNavigate()

  const handleSubmit = () => {
    e.preventDefault();
    Axios.Post("http://localhost:3000/auth/Register",{
      userName,
      email,
      password,
    }).then(response =>{
      navigate('/login')
    }) .catch(err=> {
      console.log(err)
    })

  }

  return (
    <div className='sign-up-container' onSubmit={handleSubmit}>
        <form className='sign-up-form'>
        <h2>Signup</h2> 
            <label htmlFor="username"> Username:</label>
            <input type="text" placeholder='Username...' onChange={(e) => setuserName(e.target.value)} />

            <label htmlFor="email">Email:</label>
            <input type="email" autoComplete='off' placeholder='Your email...' onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button>SignUP</button>
            <p>Have an account?  <Link to="/login">Login</Link></p>
        </form>
      
    </div>
  )
}

export default Register
