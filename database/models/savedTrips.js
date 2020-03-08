const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    tripName:{type: String, required:true},
    departure:{type:String, required:true},
    destination: {type: String, required: true},
    flightPrice: {type: Number, required: true},
    tripPrice: {type: Number, required:true}

});

const Trips = mongoose.model("Trips", tripSchema);

module.export = Trips;