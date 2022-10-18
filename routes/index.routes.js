const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const User = require('../models/User.model');

//HOME PAGE
router.get("/", isLoggedIn, (req, res, next) => {
  res.render('profile')
});

// //LOGGIN PAGE
// router.get("/loggin", notLogged, (req, res, next) => {
//   res.render("loggin");
// });
// router.post("/loggin", notLogged, (req, res, next) => {
//   res.render("profile");
// });

// //PROFILE PAGE
// router.get("/profile/:id", isLogged, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/profile/:id/create", isLogged, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/profile/:id/update", isLogged, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/profile/:id/delete", isLogged, (req, res, next) => {
//   res.render("profile");
// });




// //CHAT PAGE
// router.get("/chat/:id", isLogged, (req, res, next) => {
//   res.render("chat");
// });

// //ADMIN PAGE: Update & Delete
// router.get("/admin/:id", isAdmin, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/admin/:id", isAdmin, (req, res, next) => {
//   res.render("profile");
// });


module.exports = router;
