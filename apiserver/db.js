const mongoose = require('mongoose')

module.exports = () => {
    function connect() {
        mongoose.connect("localhost:27017/reactboard", (err) =>{
            if(err) console.log(err)
            console.log('mongodb connected')
        })
    }
    connect()
    mongoose.connection.on('disconnected', connect)
}