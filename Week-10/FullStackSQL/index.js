import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"

// custom routes
import userRouter from "./routes/auth.route.js";

dotenv.config()
const port = process.env.PORT || 4000
const app = express();

app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173'
}))

//for taking data from json
app.use(express.json())

//for taking data from url
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"test check"
    });
});

app.use("/api/v1/users",userRouter);


app.listen(port,()=>{
    console.log(`Backend is listening at ${port}`)
})