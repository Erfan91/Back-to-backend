import express from 'express';
// routes import
import useRouter from "./routes/user.route.js";

// create an express app
const app = express();

// parese json request body
app.use(express.json());


// routes declaration
app.use("/api/v1/users", useRouter);

 

export default app;