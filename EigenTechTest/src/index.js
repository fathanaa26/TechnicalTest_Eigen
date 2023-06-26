import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import books from './routes/books.route.js'
import members from './routes/members.route.js'

const app = express()

app.use(morgan('dev'))
app.use(cors({
    origin:'localhost:3000'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use('/members', members)
app.use('/books', books)
app.use('/', (req,res)=>{
    res.status(200)
    res.send({
        status:'200',
        message: 'hello'
    })
})


app.listen(3000)