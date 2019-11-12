const mongoose = require('mongoose');
const politicSchema = new mongoose.Schema({
    id:Number,
    author:String,
    title:{type:String, required:true},
    body: {type:String, required:true},
    createdAt:{type:Date, default:Date.now},
    updatedAt: Date
});
module.exports = mongoose.model('Politic', politicSchema);