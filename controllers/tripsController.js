const db = require("../database/models");

module.exports = {
    findAll: function (req, res) {
        db.Trip
            .find(req.query)
            .then(dbModel=>res.json(dbModel))
            .catch(err=> res.status(422).json(err));
    },
    findByID: function (req, res) {
        db.Trip
            .findById(req.query.id)
            .then(dbModel=>res.json(dbModel))
            .catch(err=> res.status(422).json(err));
        
    }
}


//     create: function(req, res){
//         db.Trips
//             .find(req.body)
//             .then(dbModel => res.json(dbModel))
//             .catch(err=> res.status(404).json(err));
//     },
//     updateById: function(req, res){
//         db.Trips
//             .findOneAndUpdate({_id: req.params.id},{$set:{isSaved: true}}, req.body)
//             .then(dbModel => res.json(dbModel))
//             .catch(err=> res.status(404).json(err));
//     },
//     remove: function(req, res){
//         db.Trips
//             .findOneAndDelete({_id: req.params.id})
//             .then(dbModel => dbModel.remove())
//             .then(dbModel => res.json(dbModel))
//             .catch(err=> res.status(404).json(err));
//     }
// };