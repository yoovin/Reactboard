const mongoose = require('mongoose');
const  postSchema = new mongoose.Schema({
    cate:String,
    id:Number,
    author:{type:String, required:true},
    title:{type:String, required:true},
    body: {type:String, required:true},
    createdAt:{type:Date, default:Date.now},
    updatedAt: Date
});
module.exports = mongoose.model('post', postSchema);