const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// routers
const apartmentsRoute = require("./src/routes/apartments.route");
const membersRoute = require("./src/routes/members.route");
const agreementsRoute = require("./src/routes/agreements.route");
const announcementsRoute = require("./src/routes/announcements.route");
const couponsRoute = require("./src/routes/coupons.route");
const paymentsRoute = require("./src/routes/payments.route.js");

const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 3333;

// middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["https://dhakadwell.surge.sh", "http://localhost:5173"],
    credentials: true,
  })
);

// Sample route to generate and return a JWT
app.post("/jwt", (req, res) => {
  const userInfo = req.body;

  // Check if user info is valid (e.g., validate email)
  if (!userInfo.email) {
    return res.status(400).json({ error: "Invalid user info" });
  }

  // Create a JWT with the user info
  const token = jwt.sign(userInfo, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

// Default API
app.get("/", (req, res) => {
  res.send("App is running...");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.itr0uhy.mongodb.net/DhakaDwell?retryWrites=true&w=majority`;
// Replace this uri when you work a new mongodb account

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

// Routes
app.use("/apartments", apartmentsRoute);
app.use("/members", membersRoute);
app.use("/agreements", agreementsRoute);
app.use("/announcements", announcementsRoute);
app.use("/coupons", couponsRoute);
app.use("/payments", paymentsRoute);

// Handling all unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Cannot ${req.method} ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);

  await connectDB();
});
