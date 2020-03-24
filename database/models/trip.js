const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  destination: { type: String, required: true },
  flight: {
    flight_id: { type: String },
    flightSegments: { type: Array },
    price: { type: mongoose.Decimal128 }
  },
  returnFlight: {
    flight_id: { type: String },
    flightSegments: { type: Array },
    price: { type: mongoose.Decimal128 }
  },
  hotel: {
    hotel_id: { type: String },
    name: { type: String },
    roomType: { type: String },
    price: { type: mongoose.Decimal128 },
    checkInDate: {type: String},
    checkOutDate: {type: String},
    currency: {type: String},
  },
  trip: [
    {
      trip_id: { type: String },
      title: { type: String },
      amount: { type: mongoose.Decimal128 }
    }
  ],
  date:{
    trip_id: { type: String },
    date: { type: String }
  },
  packing:[
    {
      packing_id:{ type: String },
      text: { type: String }, 
      
    }
  ],
  user: { type: String, required: true }
});
const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
