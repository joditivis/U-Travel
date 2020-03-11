const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema(
    {
   user_id: [{
       type: Schema.Types.ObjectId,
       ref: "User"
   }],
    name: {type: String, required: true},
    item: {type: String, required: true},
    price: {type: Number, required: true}
}
);

const Trips = mongoose.model("Trips", tripSchema);

module.export = Trips;