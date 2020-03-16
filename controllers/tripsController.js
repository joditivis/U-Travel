const db = require("../database/models");

module.exports = {
    findAll: function (req, res) {
        db.Trip
        .find(req.query)
        .then(dbModel=>res.json(dbModel))
        .catch(err=> res.status(422).json(err));
      }
}
// createTrip = (req,res)=> {
    
//     const user = req.user.id
//     if(!user){
//         return res.status(400).json({
//             success:false,
//             error: "you need to be signed in to save a flight.",
//         })
//     }
//    const trip = new trip(user)
//    if(!trip){
//        return res.status(400).json({})
//    }
//    trip 
//    .save()
//    .then(()=> {
//        return res.status(201).json({
//            success:true,
//            id:trip_id,
//            message: "your trip was saved."
//        })
//    })
//    .catch(error=> {
//        return res.status(400).json({
//            error,
//            message: "Trip was not saved. Please make sure you are logged in and try again.",
//        })
//    })
// }
// updateTrip =





