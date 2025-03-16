const { Client } = require("pg");

// Database connection configuration
const client = new Client({
  user: "postgres", // Your PostgreSQL username
  host: "localhost", // Database host (localhost for local DB)
  database: "practicedb", // Your database name
  password: "Amit@123", // Your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

// Connect to PostgreSQL
client
  .connect()
  .then(() => console.log("✅ Connected to PostgreSQL! 🚀"))
  .catch((err) => console.error("❌ Connection error", err.stack));

module.exports = client;
