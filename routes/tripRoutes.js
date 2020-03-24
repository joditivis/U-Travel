const router = require("express").Router();
const tripsController = require("../controllers/tripsController");

// router.route('/test')
//     .get(tripsController.findAll)
//     .post(tripsController.create);

router
  .route("/savetrip/:id")
  // .get(savedTrips.findById)
  .put(tripsController.updateById);

router.route("/saveflight/:id")
  .put(tripsController.updateFlightById);

router.route("/savehotel/:id")
  .put(tripsController.updateHotelById);

router.route("/findtrip/:userId")
  .get(tripsController.findByUserID);

router.route("/addtrip")
  .post(tripsController.create);

router.route("/userpage/:tripId")
  .put(tripsController.updateByTripId);

router.route("/gettrips/:tripId")
  .get(tripsController.findByTripID);

router.route("/getpacking/:tripId")
  .get(tripsController.findByTripID);

router.route("/packing/:tripId")
  .put(tripsController.updatePackingByTripId);
  
// router.route("/date/:tripId")
//   .put(tripsController.updateDateByTripID);

// router.route("/getdate/:tripId")
//   .get(tripsController.findDateByTripId);

module.exports = router;
