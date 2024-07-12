import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO)
    console.log("connected to MongoDB")
  }
  catch (error) {
    console.log("Error connecting to MongoDB", error.message)
  }
}

export default connectToMongoDB