const express = require("express");
//represents -- collection
const cookieparser = require("cookie-parser");
const cors=require("cors");

const authRouter=require("./routes/authRoutes");
const userRouter=require("./routes/userRoutes");
const planRouter=require("./routes/planRoutes");

const app = express();
app.use(express.json());
app.use(cookieparser());
//to enable cross origin source
app.use(cors());

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/plan",planRouter);
//update profile
//delete profile
app.use(function(req,res){
    res.send("<h1>Backend API</h1>")
})

const port=process.env.PORT||3000;
//server starting
app.listen(port, function () {
    console.log("Server started at 3000");
});