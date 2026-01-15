
import db from '../config/dbConfiguration.js';

const  addContact= (contactData,callback)=>{
    const{name,phone,email,message} = contactData;
    const sql =` INSERT INTO contacts (name, phone, email, message)
    VALUES (?, ?, ?, ?) `;
    db.query(sql,[name,phone,email,message],callback);
};
export default {
  addContact
};