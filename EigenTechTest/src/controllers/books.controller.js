import Books from '../model/books.model.js'

const getAllBooks = (req,res)=>{
    Books.getAllBooks((err,data)=>{
        if(err){
            res.statusCode = 500
            return res.json({
                message:"Internal Error",
                data: err
            })
        }
        res.statusCode = 200
        return res.json({
            message:"OK",
            data
        })
    })
}

const filterMemberById = (req,res,next)=>{
    const memberCode = req.body.memberCode
    
    Books.filterMemberById(memberCode,(err,data)=>{
        if(err){
            console.log(err.message)
            throw err
        }
        const isPenalized = data.find(x => x.penalized == 0)
        if(isPenalized == undefined){
            res.statusCode = 400
            res.json({
                message:"You've been penalized"
            })
            return res.end()
        }
        res.locals.memberId = data[0].id
        console.log(res.locals.memberId)
        res.locals.memberCode = data[0].name
        next()
    })
    
}

const filterBookByReq = (req,res,next) => {
    const bookCode = req.body.bookCode
    if(bookCode.length > 2){
        res.statusCode = 400
        res.json({
            message: "Cannot Borrowed More Than 2 Book"
        })
        return res.end()
    }

    Books.filterBooksByReq(bookCode, (err,data)=>{
        if(err){
            console.log(err.message)
            throw err
        }
        
        let BorrowedBook =  data.filter(x => x.stock === 1)
        if(borrowingBook.length < bookCode.length){
            res.statusCode = 400
            res.json({
                message:"Both or one of book out of stock or being borrowed by someone else"
            })
            return res.end()
        }

        BorrowedBook = data.map(x => x.title)
        res.locals.bookId = data.map(x => x.id)
        console.log(res.locals.bookId)
        res.locals.bookCode = BorrowedBook
        next()
    })
    
}

const borrowingBook = (req,res) => {

    const epochNow = Date.now()
    const borrowDate = new Date(epochNow).toLocaleDateString('wib-ID')

    const now = Date.now()
    let returnDate = now + (604800 * 1000);
    returnDate = new Date(returnDate).toLocaleDateString('wib-ID')
    const dbId = {
        memberId: res.locals.memberId,
        bookId: res.locals.bookId,
        borrowDate,
        returnDate
    }
    
    Books.borrowingBook(new Books(dbId),(err,data)=>{
        if(err){
            console.log(err)
            throw err
        }
        res.statusCode = 201
        res.json({
            borrower: res.locals.memberCode,
            books: res.locals.bookCode,
            duration:{
                borrowDate,
                returnDate
            }
            // ,data
        })
    })

}

const stepBorrowBook = [
    filterMemberById,
    filterBookByReq,
    borrowingBook
]

export {getAllBooks,stepBorrowBook}