

const db = mysql.createConnection({
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    user: process.env.DBUSER,
    password: process.env.DBPASSWD,
    port: process.env.DBPORT,
}) 

db.connect()
export default db;