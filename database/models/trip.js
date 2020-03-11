const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripSchema = new Schema(
    {
        trip_id: {type: Number, required: true},
        name: {type: String, required: true},
        item: {type: String, required: true},
        price: {type: Number, required: true},
        user: [{type: Schema.Types.ObjectId, ref: "User"}]

    }
);
const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
