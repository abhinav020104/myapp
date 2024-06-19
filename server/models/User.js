const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    MobileNumber:{
        type:Number,
        required:true,
    }
});
const User = mongoose.model('User',userSchema);

module.exports = User;