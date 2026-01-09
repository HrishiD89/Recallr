import mongoose from "mongoose";

const mongoConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGOURL as string);
    console.log("MongoDB connected...");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default mongoConnect;
