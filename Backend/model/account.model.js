import mongoose from "mongoose"

const accountSchema = new mongoose.Schema({

  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    maxlength: 11,
    minlength: 10
  },
  email: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  profilePic: {
    type: String,
    default: "",
  },
}, { timestamps: true })

const Account = mongoose.model("Account", accountSchema)

export default Account
