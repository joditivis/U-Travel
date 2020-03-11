const mongoose = require("mongoose");
const db = require("../database/models");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/utravel');

const tripSeed = [
    {
        trip_id: 3198941,
        name:"New York",
        item: "Flight",
        price: 800
        
    }
];
db.Trip
    .remove({})
    .then(()=>db.Trip.collection.insertMany(tripSeed))
    .then(data => {
        console.log(data.result.n + "added to list");
        process.exit(0);
    })
    .catch(err =>{
        console.log(err);
        process.exit(1);
    });