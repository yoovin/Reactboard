const app = require('express')()
const cors = require('cors')
const Post = require('./Model/post')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


var db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log("Connected to mongod server")
})

mongoose.connect("mongodb://localhost/yooboard")

app.use(bodyParser.json())

app.get('/list', cors(), (req, res)=>{ //Read Boards
    console.log(req.query)
    Post.find({cate:req.query.cate, isDeleted:false},(err, posts)=>{
        if(err) return res.status(500).send({error:'database failure'})
        res.json(posts)
    }).sort({id:-1}).limit(50)
})

app.get('/getpost', (req, res) => { //Read Post
    Post.find({cate:req.query.cate, id:req.query.id}, (err, posts) => {
        if(err)return res.status(500).send({error:'database failure'})
        res.json(posts)
    })
})


app.post('/post', cors(), (req, res)=> { //Create Post
    var post = new Post({
        cate: req.body.cate,
        author: req.body.author,
        title: req.body.title,
        body: req.body.body
    })

    post.save((err) => {
        if(err){
            console.error(err)
            res.json({result:0})
        }
        else{
            console.log("데이터베이스에 추가됨!")
            res.json({result:1})
        }})
    })

app.post('/changePost', cors(), (req, res) => { //Update Post
    Post.findOne({cate:req.body.cate, id:req.body.id}).exec((err, post)=>{
        post.title = req.body.title
        post.body = req.body.body
        post.updateAt = Date.now

        post.save((err)=>{
            if(err){
                console.error(err)
                res.json({result:0})
            }else{
                console.log("데이터베이스 업데이트됨!")
                res.json({result:1})
            }
        })
    })
})

app.post('/delectPost', cors(), (req, res)=>{ //Delect Post
    Post.findOne({cate:req.body.cate, id:req.body.id}).exec((err, post)=>{
        post.isDeleted = true

        post.save((err)=>{
            if(err){
                console.error(err)
                res.json({result:0})
            }else{
                console.log("데이터베이스 삭제됨!")
                res.json({result:1})
            }
        })
    })
})

app.listen(5000, console.log('서버 염'))