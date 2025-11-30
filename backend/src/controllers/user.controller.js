import {User} from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        //basic validation
        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are requested"});
        }
        

        //check if user already exists
        const existing = await User.findOne({email: email.toLowerCase()});
        if(existing){
            return res.status(400).json({messae: "user already exits"});
        }

        // create user
        const user = await User.create({
            username,
            email,
            password,
            loggedIn: false
        })

        return res.status(201).json({
                message: "User created successfully",
                user: {
                    _id: user._id,
                    email: user.email,
                    username: user.username,
                }
            });
    } catch (err){
        res.status(500).json({message: "Internal server error", error: err.messageD})
    }
};

export {
    registerUser,
}