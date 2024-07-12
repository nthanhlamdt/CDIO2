import mongoose from "mongoose"

const conversationSchema = new mongoose.Schema({
  Participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
    default: []
  }]
}, { timestamps: true })

const Conversation = mongoose.model("Conversation", conversationSchema)

export default Conversation