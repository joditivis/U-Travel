const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema(
    {
        destination: {type: String, required: true},
        flight:
            {
                flight_id: {type: String},
                origin: {type: String},
                destination: {type: String},
                departure: {type: String},
                arrival: {type: String},
                price: {type: mongoose.Decimal128}
            },
        hotel: [
            {
                hotel_id: {type: Number},
                name: {type: String},
                roomType: {type: String},
                price: {type: mongoose.Decimal128}

            }
        ],        
        user: { type: String, required: true }
        

    }
);
const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
