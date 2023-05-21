import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
   mongoose.set("strictQuery", true);

   //    check connect to DB
   if (isConnected) {
      console.log("MongoDB is already Connected");
   }

   try {
      // if connected is true
      await mongoose.connect(process.env.MONGODB_URI, {
         dbName: "share_prompt",
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });

      isConnected = true;
      console.log("MongoDB Connected");
   } catch (error) {
      console.log(error);
   }
};
