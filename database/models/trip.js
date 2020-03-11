const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripSchema = new Schema(
    {
        user_id: {type: Number, required: true},
        name: {type: String, required: true},
        item: {type: String, required: true},
        price: {type: Number, required: true}
    }
);
const Trip = mongoose.model("Trip", tripSchema);
module.export = Trip;