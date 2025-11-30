import dotenv from 'dotenv'; // it lets us load environment variables from all over sever
import connectDB from './config/database.js';
import app from "./app.js";

// specify the path to the environment variables file
dotenv.config({
    path: "./.env"
});

const startServer = async () => {
    try {
        await connectDB();
        app.on("error", (err) => {
            console.log("ERR", err);
            throw err;
        });
        app.listen(process.env.PORT || 3001, ()=>{
            console.log("server is running on port :", process.env.PORT)
        })
    } catch (err){
        console.log("DB Connection Failed", err);
    }
}

startServer();