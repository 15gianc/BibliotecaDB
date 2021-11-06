import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
    name:String,
    author:String,
    category:String,
    dbStatus:Boolean,
    registerDay:{type:Date, default:Date.now},

});

const libro = mongoose.model("libros",librarySchema);

export default libro;