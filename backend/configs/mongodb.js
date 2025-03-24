import mongoose from "mongoose";

// Connect to the MongoDB database
const connectDB = async () => {
  // Attach the event listener to mongoose.connection
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });

  try {
    // Use mongoose.connect() to connect to the database
    await mongoose.connect(`${process.env.MONGODB_URI}/lms`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

export default connectDB;
