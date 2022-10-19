const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const chatSchema = new Schema(
  {
    myId: {type: Schema.Types.ObjectId},
    otherId: {type: Schema.Types.ObjectId},
    chat: [{type: String}]
  }
);

const Chat = model("Chat", chatSchema);

module.exports = Chat;
