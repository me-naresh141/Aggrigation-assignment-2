let mongoose = require("mongoose");

let Schema = mongoose.Schema

let userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  identity: {
    eye: { type: String },
    phone: { type: String },
    location: { type: String },
    },
    active: {type:Boolean}
});

module.exports= mongoose.model('User',userSchema)
