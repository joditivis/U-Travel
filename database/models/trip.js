const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema(
    {
        trip_id: {type: Number, required: true},
        destination: {type: String, required: true},
        flight:[
            {
                flight_id: {type: Number, required: true},
                departure: {type: String, required: true},
                arrival: {type: String, required: true},
                price: {type: mongoose.Decimal128, required: true}
            }
        ],
        hotel: [
            {
                hotel_id: {type: Number, required: true},
                name: {type: String, required: true},
                roomType: {type: String, required: true},
                price: {type: mongoose.Decimal128, required: true}

            }
        ],        
        user: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ]

    }
);
const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
