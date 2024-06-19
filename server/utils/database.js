const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;
const dbConnect = ()=>{
    mongoose.connect(DB_URL).then(()=>{
        console.log("Connection established with DB Sucessfully !");
    }).catch(()=>{
        console.log("Connection with DB Failed !");
    })
}

module.exports = dbConnect;