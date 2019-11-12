const app = require('express')()
const cors = require('cors')
const Post = require('./Model/post')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = require('url')

var db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log("Connected to mongod server")
})

mongoose.connect("mongodb://localhost/reactboard")

app.use(bodyParser.json())

app.get('/post', cors(), (req, res)=>{
    Post.find({cate:req.query},(err, posts)=>{
        if(err) return res.status(500).send({error:'database failure'})
        res.json(posts)
    })
})

app.post('/post', cors(), (req, res)=> {
    var post = new Post({
        cate: req.body.cate,
        id: req.body.id,
        author: req.body.author,
        title: req.body.title,
        body: req.body.body
    })

    post.save((err) => {
        if(err){
            console.error(err)
            res.json({result:0})
            return
        }
        else{
            console.log("데이터베이스에 추가됨!")
            res.json({result:1})
        }})
    })

app.listen(5000, console.log('서버 염'))