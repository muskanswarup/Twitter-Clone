import {Tweet} from '../models/tweetSchema.js';
import { User } from '../models/userSchema.js';

export const createTweet = async (req, res) => {
    try{
        const {description , id} = req.body;

        if(!description || !id){
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            });
        };

        await Tweet.create({
            description,
            userId:id
        });

        return res.status(201).json({
            message: "Tweet created successfully.",
            success: true
        });
        
    }catch(error){  
        console.log(error);
    }
}

export const deleteTweet = async(req , res) => {
    try{
        const {id} = req.params;
        await Tweet.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Tweet deleted successfully.",
            success: true
        });

    }catch(error){
        console.log(error);
    }
}

export const likeOrDislike = async(req , res) => {
    try{

        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;

        const tweet = await Tweet.findById(tweetId);

        if(tweet.like.includes(loggedInUserId)){
            // Dislike
            await Tweet.findByIdAndUpdate(tweetId , {$pull:{like: loggedInUserId}});

            return res.status(200).json({
                message: "User disliked your tweet",
                success: true
            });

        }else{
            // Like
            await Tweet.findByIdAndUpdate(tweetId , {$push:{like: loggedInUserId}});
            return res.status(200).json({
                message: "User liked your tweet",
                success: true
            });
        }

    }catch(error){
        console.log(error);
    }
}

export const getAllTweets = async(req, res) => {
    try{
        const id = req.params.id;
        const loggedInUser = await User.findById(id);
        const loggedInUserTweets = await Tweet.find({userId: id});
        console.log("logged in's tweets : " + loggedInUserTweets);
        const followingUserTweets = await Promise.all(loggedInUser.following.map((otherUsersId) => {
            return Tweet.find({userId: otherUsersId});
        }));
        
        return res.status(200).json({
            tweets: loggedInUserTweets.concat(...followingUserTweets),
            success: true
        })
    }catch(error){
        console.log(error);
    }

   
}

export const getFollowingTweets = async(req, res) => {
    try{
        const id = req.params.id;
        const loggedInUser = await User.findById(id);
        const followingUserTweets = await Promise.all(loggedInUser.following.map((otherUsersId) => {
            return Tweet.find({userId: otherUsersId});
        }));
        
        return res.status(200).json({
            tweets: [].concat(...followingUserTweets),
            success: true
        })
    }catch(error){
        console.log(error);
    }
}