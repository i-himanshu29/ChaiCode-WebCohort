import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./utils/dbConnet.js";// sometime dbconnet.js bhi likhna padta hai
import cookieParser from "cookie-parser";
// import all routes
import userRoutes from "./routes/user.routes.js"

//dot env
dotenv.config();

// express app
const app = express();

// cors
app.use(
  cors({
    // from where we want the request - frontend
    // origin: "http://localhost:3000",
    origin:process.env.BASE_URL,
    // Credentials
    credentials:true,
    // What type of methods are allowed
    methods:['GET','POST','DELETE','OPTIONS'],
    //allowedHeaders- case Sensitive
    allowedHeaders:['Content-Type','Authorization'],
    
  })
);

// to send the json format data
app.use(express.json())

// to manage url data
app.use(express.urlencoded({extended:true}))
//to access cookies
app.use(cookieParser());

//port
const port = process.env.PORT || 3000; // 3000,4000,5000

//requests
app.get("/", (req, res) => {
  res.send("Cohort!");
});
app.get("/hitesh", (req, res) => {
  res.send("Cohort! hai hitesh sir ka");
});

// Error - route always start with / ("/piyush")
app.get("piyush", (req, res) => {
  res.send("Piyush!");
});

//connect to DB
dbConnect();

// user Routes
app.use("/api/v1/users",userRoutes)

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
