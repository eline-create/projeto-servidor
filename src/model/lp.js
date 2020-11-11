const mongoose = require("mongoose");

const lpSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    creationYear: { type: Number },
    author: { type: String }, 
    commentSymbol: { type: String }
    
},{
    versionKey: false
});

module.exports = mongoose.model("lp", lpSchema);