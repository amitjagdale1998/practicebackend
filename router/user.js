const express = require("express");
const client = require("../db");

const router = express.Router();

// GET API to fetch user details
router.get("/users", async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM public."user"');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    console.log(firstName, lastName);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

module.exports = router;
