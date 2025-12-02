import { Post } from "../models/post.model.js";

const createPost = async (req, res) => {
    try {

        const {name, description, age} = req.body;

        if(!name || !description || !age){
            return res.status(400).json({
                message: "All fields are required"
            })
        };

        const post = await Post.create({
            name,
            description,
            age
        })

        res.status(201).json({
            message: "post created successfully",
            post
        })

    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            error: err.message
        })
    }
};

const getPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            error: err.message
        })
    }
};

const updatePost = async (req, res) => {
    try {
        // basic validation
        //{name, description, age} --> [0,1,2] = Object.keys = makes an array of keys
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({
                message: "No data provided to update"
            })
        }

        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!post) return res.status(404).json({
            message: "POst not found"
        })

        res.status(200).json({
            message: "Post updated successfully",
            post
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if(!deletedPost) return res.status(404).json({
            message: "Post not found",
        })
        return res.status(200).json({
            message: "Post deleted successfuly"
        })
    } catch (err) {
        return res.status(500).json({
            message: "Intenal server error",
            error: err.message
        })
    }
}

export {
    createPost,
    getPost,
    updatePost,
    deletePost
}