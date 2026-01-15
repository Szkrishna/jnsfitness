import mysql from 'mysql2';
const db = mysql.createConnection({
     host:'localhost',
     user:'jns_user',
     password:'jns@123',
     database:'jns_fitness'
});
db.connect();
export default db;