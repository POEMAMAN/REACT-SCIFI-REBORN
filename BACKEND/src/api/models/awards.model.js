const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const awardsSchema = new Schema(
    {
        name:{type:String,require:true},
        categories: {type:String},
        organization:{type:String},
        countrie: {type:String},
        resume: {type: String},
        picture: {type: String},
        

    },{
        timestamps:true
    }
)

const Award = mongoose.model("award", awardsSchema);

module.exports = Award;