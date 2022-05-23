const mongoose = require('mongoose');
const product = mongoose.Schema({
    productname: {    type: String, 
    required:true },
    productnumper: {  type: String,
        required:true },
    customer:[ {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true
    }],
   
});

module.exports = mongoose.model('Product', product);