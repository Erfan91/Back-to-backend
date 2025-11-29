import mongoose from "mongoose";

const connectDB = async () => {
  await  mongoose.connect("mongodb://0.0.0.0:27017/backtobackend")
    .then(() => console.log(`Connected to DB`))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

}

export default connectDB;