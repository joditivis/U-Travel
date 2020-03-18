
const router = require('express').Router();
const tripsController = require('../controllers/tripsController');

router.route('/test')
    .get(tripsController.findAll)
    .post(tripsController.create);
    
router.route("/savetrip/:id")
// .get(savedTrips.findById)
    .put(tripsController.updateById);
// .delete(savedTrips.remove);

module.exports = router;
