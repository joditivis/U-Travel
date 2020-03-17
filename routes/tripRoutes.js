const express = require('express');
const router = express.Router();
const Trip = require('../controllers/tripsController');

router.route('/test')
    .get(Trip.findAll)
    

// .route("/:id")
// .get(savedTrips.findById)
// .put(savedTrips.update)
// .delete(savedTrips.remove);

module.exports=router;
