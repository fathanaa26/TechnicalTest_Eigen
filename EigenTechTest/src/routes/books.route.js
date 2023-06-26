import express from 'express'
import {getAllBooks,stepBorrowBook} from '../controllers/books.controller.js'

const app = express.Router()

app.get('/', getAllBooks)
app.post('/borrow',stepBorrowBook)
app.put('/return')

export default app