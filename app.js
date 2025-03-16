const express = require("express");
const user = require("./router/user");
const app = express();
const db = require("./db");

// Middleware to parse JSON requests
app.use(express.json());
// Import user router
app.use("/users", user);
app.get("/", (req, res) => {
  res.end("Server started successfully!");
});

// Use user router at "/abc" route

// Handle undefined routes
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This route is not present!",
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});
