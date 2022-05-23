const mongoose = require('mongoose');
const customer = mongoose.Schema({
    customername: {    type: String, 
    required:true },
    address: {  type: String,
        required:true },
    phone : {   type: String,
        required:true },
    country: {   type: String,
        required:true },
    product:[ {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
    }],
    order:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
}],

});

module.exports = mongoose.model('Customer', customer);