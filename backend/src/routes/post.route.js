import { Router} from "express";
import { createPost, getPost, updatePost, deletePost } from "../controllers/post.controller.js";

const router = Router();

router.route("/create").post(createPost);
router.route("/getPosts").get(getPost);
router.route("/update/:id").patch(updatePost); // patch is used to update partial data
router.route("/deletePost/:id").delete(deletePost);



export default router;