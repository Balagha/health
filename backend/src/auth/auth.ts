import {User} from "../entity/user";
import * as bcrypt from 'bcrypt';

const jwt = require('jsonwebtoken');

const isAuthenticated = async (req,res,next)=>{
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const data = jwt.verify(token, process.env.SECRET_KEY);
        req.email = data.email;
        req.userRole = data.role;
        return next();
    } catch {
        return res.sendStatus(403);
    }
}
const generateJwtToken = async (req,res)=> {
    const user=await User.findOne({where:{email:req.body.email},select: ['id', 'password']})
    if(!user)
        return res.json({message:'User not found'});
    const isPasswordMatched = await bcrypt.compare(req.body.password,user.password);
    if(!isPasswordMatched){
        return res.json({message:'Wrong credentials pass'});
    }
    const token = await jwt.sign({email: req.body.email,role: "patient" }, process.env.SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
    return res
        .cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .cookie("user", user.id, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json({ message: "Logged in successfully 😊 👌" });
}

export default {
    isAuthenticated,
    generateJwtToken,
};