var express = require("express");
var router = express.Router();
let User = require("../models/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// 1.Find all users who are active.

router.get(`/all/active`, (req, res, nex) => {
  User.aggregate([{ $match: { active: true } }]);
});

// 2.Find all users whose name includes blake case insensitive.

User.aggregate([{ $match: { name: "/black$/i " } }]);
// 3.Find all males.
User.aggregate([{ $match: { gender: "male" } }]);

// 4.Find all active males.
User.aggregate([{ $match: { gender: "males", active: true } }]);

// 5.Find all active females whose age is >= 25.
User.aggregate([
  { $match: { gender: "females", active: true, age: { $gte: 25 } } },
]);

//  6.Find all 40+ males with green eyecolor.
User.aggregate([
  {
    $match: { gender: "male", age: { $gte: 40 }, eye: "green" },
  },
]);

// 7.Find all blue eyed men working in 'USA'.

User.aggregate([{ $match: { gender: "male", eye: "blue", location: "USA" } }]);

// 8.Find all female working in Germany with green eyes and apple as favoriteFruit.
User.aggregate([
  {
    $match: {
      gender: "female",
      location: "Germany",
      eye: "green",
      favoriteFruite: "Apple",
    },
  },
]);
// 9.Count total male and females.
User.aggregate([{ $match: { gender: "male", count: { $sum: 1 } } }]);
User.aggregate([{ $match: { gender: "female", count: { $sum: 1 } } }]);
// 10.Count all whose eyeColor is green.
User.aggregate([{ $match: { eye: 'green', count: {$sum:1} } }])

// 11.Count all 20+ females who have brown eyes.

module.exports = router;
