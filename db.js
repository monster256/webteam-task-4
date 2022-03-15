const mongoose=require('mongoose');

const mongoURI="mongodb://localhost:27017/mohit?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectTOMongo=async()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to MongoDB");
    })
}
module.exports=connectTOMongo;