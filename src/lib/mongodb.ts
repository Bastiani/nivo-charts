import mongoose from "mongoose";

export function connectDatabase() {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.connections[0].close();
    mongoose.connection
      .on("error", (error) => reject(error))
      .on("close", () => console.log("Database connection closed."))
      .once("open", () => resolve(mongoose.connections[0]));

    mongoose.connect(process.env.MONGODB_URI || "");
  });
}
