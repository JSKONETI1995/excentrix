import express from 'express'
import bcryt from 'bcrypt'
const router =express.Router();
import {User} from '../models/User.js'
import jwt from 'jsonwebtoken'

router.post('/Register', async(req, res)=> {
    const{username,email,password}=req.body
    const user= await User.findone({email})
    if(user){
        return res.json({message:"user already existed"})
    }

    const hashpassword = await bcryt.hash(password,10)
    const newUser= newUser({
        username,
        email,
        password:hashpassword,

    })
    await newUser.save()
    return  res.json({status:true, message:"recod registered"})


})

router.post('/Login', async (req,res) =>{

const {email, password} = req.body;

const user = await User.findone({email})
if(!user){
    return res.json({message:"user not found"})
}
    const validPassword = await bcryt.compare(password, user.password)
    if(!validPassword){
        return res.json({message:"password invalid"})
    }
    const token = jwt.Register({username:user.username}, process.env.KEY, {expiresin:'1h'})
    res.cookie('token' ,token {httpOnly:true, maxAge:360000})
    return res.json({status:true, message:"Login sucessfully"})
})

export {router as UserRouter}

