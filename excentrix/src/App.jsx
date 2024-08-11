import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Home from './Components/Dashboard/Dashboard'
import ForgotPassword from './Components/ForgotPassword/Forgot'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'




Login
function App() {

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='Dashboard' element={< Dashboard/>}></Route>
    <Route path='register' element={<Register />}></Route>
    <Route path='login' element={<Login />}></Route>
    <Route path='forgotPassword' element={<ForgotPassword />}></Route>


   </Routes>
   </BrowserRouter>
  )
}

export default App
