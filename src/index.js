const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const Port = 8080

const app = express()

mongoose.connect('mongodb+srv://root:123@cluster0-2tzjk.mongodb.net/test?retryWrites=true&w=majority',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex :  true
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.get('*', (req, res) => {
    res.send('<h1>Api DevBusca</h1> <style>h1 { align-items: center;text-align: center; }</style>')
})

app.listen(process.env.PORT || Port)
console.log('Started | Port:'+process.env.PORT || Port)