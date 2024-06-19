const express = require("express");
const app = express();
const cors =require("cors");
const dbConnect = require("./utils/database");
const User = require("./models/User")
app.listen(4000 , ()=>{
    console.log("server listening at port 4000 !");
})
app.use(express.json());
app.use(cors());
app.get("/" , async(req , res)=>{
    res.send("You landed on a test page !");
    await User.create({FirstName : "Abhinav"  , LastName:"Arora" , MobileNumber:"7878928409"})
})
app.post("/search" , async(req , res)=>{
    console.log(req.body);
    const {MobileNumber} = req.body;
    try{
        const details = await User.findOne({MobileNumber});
        console.log(details);
        if(!details){
            return res.status(200).json({
                success:true,
                message:"No User Found !",
                data:details
            })
        }else{
            return res.status(200).json({
                success:"Success",
                message:"User fetched successfully !",
                data:details,
            })
        }
    }catch(error){
        console.log(error);
        console.log("Error while searching the user !");
    }
})
dbConnect();
