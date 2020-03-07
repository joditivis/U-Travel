const express = require('express');
const router = express.Router();
const savedTrips = require('../controllers/savedTripsController');

router
.route("/:id")
.get(savedTrips.findById)
.put(savedTrips.update)
.delete(savedTrips.remove);

module.exports.router;
