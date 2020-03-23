const mongoose = require("mongoose");
const db = require("../database/models");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/utravel');

const tripSeed = [
    {
        trip_id: 987654321,
        destination:"test",
        flight: [
            {
            flight_id: 123456789,
            departure: "03/30/2020 9:45 AM",
            arrival: "03/30/2020 12:45 AM",
            price: 800
            }
        ],
        hotel: [
            {
                hotel_id: 23456,
                name: "fake hotel",
                roomType: "1 bed",
                price: 100.10
            }
        ],
        
        user: '5e717d6db04a6e2a58e974b5'
            
        
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