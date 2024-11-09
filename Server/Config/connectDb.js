const mongoose = require("mongoose");

class MongoDb {
  constructor(db_url) {
    if (!db_url) {
      console.log("Database URL not provided in environment variables.");
    }

    this.db_url = db_url;
  }

  async connect() {
    try {
      await mongoose.connect(this.db_url);

      console.log("MongoDb Connected Succesfully");

      mongoose.connection.on("error", (error) => {
        console.log("MongoDb Not Connected", error);
      });
    } catch (error) {
      console.log("MongoDB Initial Connection Failed:",error);
    }
  }
}

const mongoDb = new MongoDb(process.env.db_url)

module.exports = mongoDb;
