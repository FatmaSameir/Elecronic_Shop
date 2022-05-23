const mongoose = require('mongoose');
const card = mongoose.Schema({
    cardtype: {    type: String, 
    required:true },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
},
   
   

});

module.exports = mongoose.model('Card', card);