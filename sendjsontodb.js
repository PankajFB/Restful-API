const mongoose = require("mongoose");
const Bank = require("./models/Banks.js");

const connectDB = require("./db/connect.js");
const jsonData = require("./");

const url =
  "process.env.MONGO_URI";

// connect to the database
const start = async () => {
  try {
    await connectDB();

    console.log("Connected to MongoDB...");
    await Bank.create(jsonData);
    // var bulk = dataapi.bank.initializeOrderedBulkOp();
    // bulk.insert(jsonData);
  
    // bulk.execute();

    console.log("Data Imported...");
  } catch (err) {
    console.log(err);
  }
};

start();
