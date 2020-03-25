const router = require("express").Router();
const tripsController = require("../controllers/tripsController");


router.route("/savetrip/:id")
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

router.route("/total/:tripId")
  .put(tripsController.updateTotalByTripId);
 
router.route("/gettotal/:tripId")
  .get(tripsController.findByTripID);

<<<<<<< HEAD
router.route("/destination/:tripId")
  .put(tripsController.updateDestinationByTripId);

  router.route("/getdestination/:tripId")
  .get(tripsController.findByTripID);
=======
>>>>>>> dca692629110934c1c3a3234198b8bb8bdda5547
  
// router.route("/date/:tripId")
//   .put(tripsController.updateDateByTripID);

// router.route("/getdate/:tripId")
//   .get(tripsController.findDateByTripId);

module.exports = router;
