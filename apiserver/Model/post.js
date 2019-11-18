const mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment')

var connection = mongoose.createConnection("mongodb://localhost/yooboard")

const postSchema = new mongoose.Schema({
    cate:{type:String, required:true},
    id:{type:Number, required:true, unique:true},
    author:{type:String, required:true},
    title:{type:String, required:true},
    body: {type:String, required:true},
    isDeleted:{type:Boolean, default:false},
    createdAt:{type:Date, default:Date.now},
    updatedAt: Date
});

autoIncrement.initialize(connection)

postSchema.plugin(autoIncrement.plugin,{
    model:'post',
    field:'id',
    startAt:1,
    increment:1
})

module.exports = mongoose.model('post', postSchema);