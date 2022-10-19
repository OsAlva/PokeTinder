const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {type: String, required: false}, //, trim: true
    password: {type: String, required: true, default: '123456'},
    edad: {type: Number, default: '99'},
    gender: {type: String, enum: ['male', 'female', 'others'], default: 'male'},
    img:{data: Buffer, contentType: String},
    isAdmin: {type: Boolean, default: false},
    matches: [ {
      resolution: {enum: ['yes', 'no']},
      userId: {type: Schema.Types.ObjectId, ref: 'User'},
      response: {enum: ['yes', 'no']}
    } ],
    phoneMe: {type: Number}
    // location: GOOGLEMAPS API
  }
);

const User = model("User", userSchema);

module.exports = User;
