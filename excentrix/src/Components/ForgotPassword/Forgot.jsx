import React, { useState } from 'react'
import './Forgot.css'
import { Link, useNavigate} from 'react-router-dom'

const ForgotPassword = () => {
    const[email, setEmail] = useState('')
  const navigate = useNavigate()
  Axios.defaults.withCredentials
  
    const handleSubmit = () => {
      e.preventDefault();
      Axios.Post("http://localhost:3000/auth/forgotPassword",{
        email,
        
      }).then(response =>{
        if(response.data.status){
            alert:("check your email")
        }
        navigate('/home')
      }) .catch(err=> {
        console.log(err)
      })
  
  return (
    <div className='sign-up-container' onSubmit={handleSubmit}>
    <form className='sign-up-form'>
    <h2>Login</h2> 
        
        <label htmlFor="email">Email:</label>
        <input type="email" autoComplete='off' placeholder='Your email...' onChange={(e) => setEmail(e.target.value)} />

        
        <button>Forgot Password</button>
        <p><Link to="/forgotPassword ">ForgotPassword?</Link></p>
        <p>Don't Have account?  <Link to="/Register">Signup</Link></p>
    </form>
  
</div>
  )
}
}

export default ForgotPassword
