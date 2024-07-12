import mongoose from "mongoose"

const friendsSchema = new mongoose.Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },

  ListFriend: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Friend',
    default: []
  }],
}, { timestamps: true })

const ListFriends = mongoose.model("ListFriends", friendsSchema)

export default ListFriends
