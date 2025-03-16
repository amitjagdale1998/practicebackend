const client = require("../db"); // Ensure the database connection is correct

// Function to fetch user details
const getUsers = async (req, res) => {
  console.log("hjxjkcsbjksvkj");
  try {
    const result = await client.query("SELECT * FROM public.user");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Database Error:", error);
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

module.exports = { getUsers }; // Ensure function is properly exported
