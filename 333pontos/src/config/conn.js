import mysql from "mysql2";

const conn = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Sen@iDev77!.",
    database: "eventos",
});

conn.query("SELECT 1 + 1 AS Solution", (error, result) => {
    if(error){
        console.error(error);
        return;
    };
    console.log("The solution is: ", result[0].Solution);
});

export default conn;