import mongoose from "mongoose";
import GroupMember from "./GroupMembers.model";

const groupSchema = new mongoose.Schema({
  GroupName: {
    type: String,
    require: true
  },

  GroupMembers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'GroupMember'
    }
  ]
})

const Group = mongoose.model('Group', groupSchema)
export default Group