import db from "../db/sql_connect.js";

class Members {
    constructor(bodyReq){
        this.code = bodyReq.code
        this.member = bodyReq.member
    }

    static getAllMembers(result){
        const query = "SELECT * FROM `members`"
        db.query(
            query,
            (err,res) => {
                if(err){
                    result(err,null)
                    return
                }
                result(null,res)
            }
        )
    }
}

export default Members