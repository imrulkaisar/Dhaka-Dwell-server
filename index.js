const express = require("express");
const app = express();
// const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const port = process.env.PORT || 3333;

// middleware
app.use(express.json());
app.use(cookieParser());

// Default API
app.get("/", (req, res) => {
  res.send("App is running...");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.itr0uhy.mongodb.net/?retryWrites=true&w=majority`;
// Replace this uri when you work a new mongodb account

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    /**
     * ******************************************************
     * Remove next 3 line code after checking db connection.
     * ******************************************************
     */
    // await client.connect();
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );

    const database = client.db("DhakaDwell");
    const apartmentsData = database.collection("apartments");

    /** Database APIs */

    // Add your apis here

    // end try block
  } catch (e) {
    console.error(e);
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
