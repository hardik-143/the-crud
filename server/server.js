import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import connectDB from "./db.js";
import authRoutes from "./routes/auth.js";
import todoRoutes from "./routes/todo.js";
// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 1433;

// Connect to MongoDB
connectDB();

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
); // session configuration

// CORS configuration
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials",
    ],
  })
);

// Middleware
app.use(express.json()); // parse json bodies in the request
app.use(express.urlencoded({ extended: true })); // parse urlencoded bodies in the request

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/todo", todoRoutes);
// Basic route for testing
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the CRUD API" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
