import db_config from "./sql_config.js";
import mysql from "mysql";

const db = mysql.createPool({
  connectionLimit:10,
  host: db_config.host,
  user: db_config.user,
  password: db_config.password,
  database: db_config.database,
});

db.query("SELECT * FROM `members`",(err,result,field)=>{
  if(err) throw err
  if(result) console.log("[MySQL]Conn. OK")
});

export default db;
