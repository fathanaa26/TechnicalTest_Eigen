import db from "../db/sql_connect.js"

class Books {
    constructor(resLoad){
        this.memberId = resLoad.memberId
        this.bookId = resLoad.bookId
        this.borrowDate = resLoad.borrowDate
        this.returnDate = resLoad.returnDate
    }

    static getAllBooks(result){ 
        const query = "SELECT * FROM `books` WHERE `stock` = 1"
        db.query(
            query,
            (err,data) => {
                if(err){
                    result(err,null)
                    return
                }
                result(null,data)
            }
        )
    }

    static filterMemberById(payload, result){
        const query = "SELECT * FROM `members` WHERE `code` = ?"
        db.query(query,payload,(err,data)=>{
            if(err){
                result(err,null)
                throw err
            }
            result(null, data)
        })
    }

    static filterBooksByReq(payload, result){
        const query = "SELECT * FROM `books` WHERE `code` IN (?) AND `stock` = 1"
        db.query(query,[payload],(err,res)=>{
            if(err){
                result(err,null)
                throw err
            }
            result(null, res)
        })
    }

    static borrowingBook(resLoad, result){
        const query = 
        "INSERT INTO `borrowed_books` (`member_id`, `book_id`, `borrow_date`, `return_date`) VALUES (?, ?, ?, ?)"
        db.query(query,[resLoad.memberId,resLoad.bookId,resLoad.borrowDate,resLoad.returnDate],(err,res)=>{
            if(err){
                result(err,null)
            }
            result(null,res)
        })
    }
}

export default Books