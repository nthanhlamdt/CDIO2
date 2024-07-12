import mongoose from "mongoose"

const friendSchema = new mongoose.Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },

  AddFriendId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },

  Status: {
    type: String,
    required: true,
    enum: ["pending", "accepted", "addfriend"],
  }
}, { timestamps: true })

const Friend = mongoose.model("Friend", friendSchema)

export default Friend
