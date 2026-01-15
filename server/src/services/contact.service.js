
import contactModel from '../models/contact.model.js';

export const addContact = (data,callback)=>{
    // if(!data.name||!data.phone){
    //     return callback(
    //         {message:'Name and Phone are required'},null
    //     );
    // }
    contactModel.addContact(data,callback);
}
// module.exports = {
//     addContact
// };