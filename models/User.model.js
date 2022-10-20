const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {type: String, required: false}, //, trim: true
    password: {type: String, required: true},
    edad: {type: Number},
    gender: {type: String, enum: ['male', 'female', 'others']},
    img: {type: String},
    isAdmin: {type: Boolean, default: false},
    likes: [{type: Schema.Types.ObjectId, ref: "User"}],
    dislikes: [{type: Schema.Types.ObjectId, ref: "User"}],
    matches: [{type: Schema.Types.ObjectId, ref: "User"}],
    // matches: [ {enum: ['yes', 'no']}, {type: Schema.Types.ObjectId}, {note: String}],
    phoneMe: {type: Number}
    // location: GOOGLEMAPS API
  }
);

const User = model("User", userSchema);

module.exports = User;
