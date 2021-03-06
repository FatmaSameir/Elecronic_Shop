const Aggregation = require('../model/aggregation');


addaggregation = function (req, res, next) {
    const aggregation = new Aggregation({
        aggrtype: req.body. aggrtype, 
        hours:req.body.hours      
    });
    aggregation.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'added success',
                });
            } else {
                res.status(400).json({
                    massage: ' added Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}
 matchaggregation = async (req, res) => {
 const aggregation = await Aggregation.aggregate([ {     $match : { hours : { $lt: 7} }    }  ])
    res.status(200).json({  aggregation });
};

 unwindaggregation = async (req, res) => {
    const aggregation = await Aggregation.aggregate( [ { $unwind : "$hours" } ] )
    res.status(200).json({  aggregation });
};

 groupaggregation = async (req, res) => {
    const aggregation = await Aggregation.aggregate( [ {  $group: { _id: null,count: { $sum: 1 }  }   } ])
    res.status(200).json({  aggregation });
};
addFieldaggregation = async (req, res) => {
    const aggregation = await Aggregation.aggregate( [ {  $addFields: { totalHour: { $sum: "$hours"  }  }   } ])
    res.status(200).json({  aggregation });
};
projectaggregation = async (req, res) => {
    const aggregation = await Aggregation.aggregate(  [ { $project: { field: 1 }}, { $limit: 3}] )
    res.status(200).json({  aggregation });
};
lookupaggregation = async (req, res) => {
    const aggregation = await Aggregation.aggregate(  [ { $lookup :({ from: 'users', localField: 'userId', foreignField: '_id', as: 'users' })}])
    res.status(200).json({  aggregation });
};


module.exports = {
    addaggregation: addaggregation,
    matchaggregation:  matchaggregation,
    unwindaggregation: unwindaggregation,
    groupaggregation: groupaggregation,
    addFieldaggregation :addFieldaggregation,
    projectaggregation : projectaggregation,
    lookupaggregation : lookupaggregation

}
