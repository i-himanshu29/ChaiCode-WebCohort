import mongoose from "mongoose";

import dotenv from "dotenv"
dotenv.config()

//export a function that connect to DB
const dbConnect = () =>{
    mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to mongoBD");
  });
}

export default dbConnect;


// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("Connected to mongoDB");
//   })
//   .catch((err) => {
//     console.log("Error connecting to mongoBD");
//   });
