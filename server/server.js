const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the CRUD API" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
