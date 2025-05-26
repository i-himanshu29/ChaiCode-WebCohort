import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the Mongodb String");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null };
}

async function connectToDatabase() {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
    };
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, options)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    cached.connection = await cached.promise
  } catch (error) {
    cached.promise = null
  }
  return cached.connection
}
export default connectToDatabase