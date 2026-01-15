import * as service from '../services/contact.service.js';

export const addContact = (req,res)=>{
    service.addContact(req.body,(err,result)=>{
        if(err){
            return res.status(400).json({
                success:false,
                message:err.message||'Error while saving the details '
            });
        }
       res.status(201).json({
      success: true,
      message: 'Contact saved successfully',
      contactId: result.insertId
    });
    
})
}
// module.exports = {
//   addContact
// };