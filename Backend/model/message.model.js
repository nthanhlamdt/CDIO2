import mongoose, { Schema } from "mongoose"

const messageSchema = new mongoose.Schema({
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    require: true
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    require: true
  },
  message: {
    type: String,
    require: true
  },

}, { timestamps: true })

const Message = mongoose.model("Message", messageSchema)

export default Message