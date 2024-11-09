const mongoose = require("mongoose");

const connectDb = async() => {
  try {
    await mongoose.connect(process.env.db_url);

    console.log("MongoDb Connected Succesfully");

    mongoose.connection.on("error", (error) => {
      console.log("MongoDb Not Connected",error);
    });
  } catch (error) {
    console.log(error);
  }
};


module.exports = connectDb;
