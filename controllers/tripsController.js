const db = require("../database/models/savedTrips");

module.exports = {
    findAll: function(req, res){
        db.User.
            .find({username: req.params.username})
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(404).json(err));
    },
    findbyID: function(req, res){
        db.Trips
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(404).json(err));
    },
    create: function(req, res){
        db.Trips
            .find(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(404).json(err));
    },
    updateById: function(req, res){
        db.Trips
            .findOneAndUpdate({_id: req.params.id},{$set:{isSaved: true}}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(404).json(err));
    },
    remove: function(req, res){
        db.Trips
            .findOneAndDelete({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(404).json(err));
    }
};