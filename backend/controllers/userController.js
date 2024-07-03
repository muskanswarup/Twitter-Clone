import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async(req, res) => {
    try{
        const {name, username, email, password} = req.body;

        if(!name || !username || !email || !password){
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            })
        }

        const user = await User.findOne({email});

        if(user){
            return res.status(401).json({
                message: "User already exists.",
                success: false
            })
        }

        const hashedPassword = await bcryptjs.hash(password , 16);
        
        await User.create({
            name,
            username,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });

    }catch(err){
        console.log(err);
    }
}

export const Login = async (req , res ) => {
    try{
        const {email , password} = req.body;

        if(!email || !password){
            return res.status(401).json({
                message: "All fields are required",
                success: false
            })
        };

        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                message: "User does not exist.",
                success: false
            })
        }

        const isMatch = await bcryptjs.compare(password , user.password);

        if(!isMatch){
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET , {expiresIn: "1d"});

        return res.status(201).cookie("token" , token , {expiresIn: "1d" , httpOnly:true}).json({
            message: `Welcome back ${user.name}`,
            success: true
        });

    }catch(err){
        console.log(err);
    }
} 

export const logout = (req, res) => {
    return res.cookie("token" , "" , {expiresIn : new Date(Date.now())}).json({
        message: "User logged out successfully.",
        success: true
    })
};

export const bookmark = async(req , res) => {
    try{
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const user = await User.findById(loggedInUserId);

        if(user.bookmarks.includes(tweetId)){
            // Remove it
            await User.findByIdAndUpdate(loggedInUserId, {$pull: {bookmarks: tweetId}});
            return res.status(200).json({
                message: "Removed from bookmark.",
                success: true
            });
        }else{
            // Add it to bookmarks
            await User.findByIdAndUpdate(loggedInUserId , {$push: {bookmarks: tweetId}});

            return res.status(200).json({
                message: "Added to bookmarks.",
                success: true
            });
        }

    }catch(error){
        console.log(error);
    }
}

