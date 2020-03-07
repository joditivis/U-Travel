const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packingListSchema = new Schema({
    name: { type: String, required:true },
    selected: {type: Boolean, default:false},
    username: {type: String}
    
});

const Packing = mongoose.model("Packing", packingListSchema);

module.exports = Packing;