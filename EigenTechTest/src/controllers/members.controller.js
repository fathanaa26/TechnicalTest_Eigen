import Members from "../model/members.model.js";

const getAllMembers = (req,res)=>{
    Members.getAllMembers((err,data)=>{
        if(err){
            res.statusCode = 500
            return res.json({
                message: "Internal Error",
                data:err
            })
        }
        res.statusCode = 200
        return res.json({
            message: "OK",
            data
        })
    })
}

export {getAllMembers}