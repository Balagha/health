import {User} from "../entity/user";
import * as bcrypt from 'bcrypt';

const jwt = require('jsonwebtoken');

const isAuthenticated = async (req,res,next)=>{
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjYyNzE3NTA4LCJleHAiOjE2NjI4OTAzMDh9.nl8tZpOPG04PlUR1zV_x4KBGwMIALjHV3Z8eEtKYGIo";
        const verify = await jwt.verify(token,process.env.SECRET_KEY);
        next();
    } catch (error) {
        return next(error);
    }
}
const generateJwtToken = async (req,res,next)=> {
    console.log(req.body)
    const user=await User.findOne({where:{id:req.body.id},select: ['id', 'password']})
    if(!user)
        return res.json({message:'User not found'});
    const isPasswordMatched = await bcrypt.compare(req.body.password,user.password);
    if(!isPasswordMatched){
        return res.json({message:'Wrong credentials pass'});
    }
    const token = await jwt.sign({id: req.body.id}, process.env.SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
     res.cookie({"token": token}).json({success: true, message: "Login Success",token:token});
     res.json(token);
     next()
}

export default {
    isAuthenticated,
    generateJwtToken,
};