const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Packing
            .find({username: req.params.username})
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(404).json(err));
    },
    findbyID: function(req, res){
        db.Packing
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(404).json(err));
    },
    create: function(req, res){
        db.Packing
            .find(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(404).json(err));
    },
    updateById: function(req, res){
        db.Packing
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(404).json(err));
    },
    remove: function(req, res){
        db.Packing
            .findOneAndDelete({_id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(404).json(err));
    }
};