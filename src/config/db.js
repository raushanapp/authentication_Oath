const mongoose =require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://raushan:singh123@cluster0.nryg8.mongodb.net/authentication_Oath?authSource=admin&replicaSet=atlas-6cf7dp-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true")
}