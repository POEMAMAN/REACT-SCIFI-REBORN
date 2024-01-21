const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const universesSchema = new Schema(
    {
        nameUniverse:{type:String,require:true},
        author:{type:String,require:true},
        sagas1:{type:String,require:true},
        sagas2:{type:String,require:true},
        sagas3:{type:String,require:true},
        sagas4:{type:String,require:true},
        sagas5:{type:String,require:true},
        sagas6:{type:String,require:true},
        sagas7:{type:String,require:true},
        resume:{type:String,require:true},
        picture: {type: String}
    },{
        timestamps:true
    }
)

const Universe = mongoose.model("universe", universesSchema);

module.exports = Universe;