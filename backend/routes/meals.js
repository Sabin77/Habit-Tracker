const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Meal = require("../models/Meal");
const { body, validationResult } = require("express-validator");

//ROUTE: 1 // Fetch all meals using: GET "/api/meals/fetchallmeals". Login required
router.get("/fetchallmeals", fetchuser, async (req, res) => {
  try {
    const meals = await Meal.find({ user: req.user.id });
    res.json(meals);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE: 2 // Add a Meal using: POST "/api/meals/addmeal". Login required
router.post(
  "/addmeal",
  fetchuser,
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("calories", "Calories must be a number").optional().isNumeric(),
    body("protein", "Protein must be a number").optional().isNumeric(),
    body("fat", "Fat must be a number").optional().isNumeric(),
  ],
  async (req, res) => {
    try {
      const { name, calories, protein, fat } = req.body;

      //If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const meal = new Meal({
        name,
        calories,
        protein,
        fat,
        user: req.user.id,
      });

      const savedMeal = await meal.save();
      res.json(savedMeal);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
