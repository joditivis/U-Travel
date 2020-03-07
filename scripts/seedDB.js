const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/utravel');

const pakingListSeed = [
    {
        name:"socks",
        selected: "false"
    },
    {
        name:"toothpaste",
        selected: "false"
    },{
        name:"sunglasses",
        selected: "false"
    },{
        name:"shoes",
        selected: "false"
    },{
        name:"jacket",
        selected: "false"
    }
];
db.Packing
    .remove({})
    .then(()=>db.Packing.collection.insertMany(pakingListSeed))
    .then(data => {
        console.log(data.resutl.n + "added packing items");
        process.exit(0);
    })
    .catch(err =>{
        console.log(err);
        process.exit(1);
    });