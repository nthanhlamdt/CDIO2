import mongoose from "mongoose";

const groupMembersSChema = new mongoose.Schema({
  GroupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  },

  MemberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  },

  Role: {
    type: String,
    required: true,
    enum: ['admin', 'member']
  }
})

const GroupMember = new mongoose.model('GroupMember', groupMembersSChema)

export default GroupMember