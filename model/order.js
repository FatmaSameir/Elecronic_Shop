const mongoose = require('mongoose');
const order = mongoose.Schema({
    ordername: {    type: String, 
    required:true },
    ordernumper: {  type: String,
        required:true },

});

module.exports = mongoose.model('Order', order);