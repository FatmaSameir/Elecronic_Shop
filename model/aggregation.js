const mongoose = require('mongoose');
const aggregation = mongoose.Schema({
    aggrtype: {    type: String, 
    required:true },
    hours:[

    ]
   
   

});

module.exports = mongoose.model('Agregation', aggregation);