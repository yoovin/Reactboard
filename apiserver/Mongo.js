const app = require('express')()
const mongoose = require('mongoose')
var Book = require('./Model/book')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

var db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log("Connected to mongod server")
})

mongoose.connect("mongodb://localhost/newboard")

app.post('/api/books', (req, res)=>{
    var book = new Book({
        title:req.body.title,
        author:req.body.author
    })
    book.save(err=>{
        if(err){
            console.error(err)
            res.json({result: 0})
            return
        }
        res.json({result:1})
    })
})

app.get('/api/books',(req, res)=>{
    Book.find((err, books)=>{
        if(err)return res.status(500).send({error:'database failure'})
        res.json(books)
    })
})

app.listen(5000, console.log("서버 도는중"))