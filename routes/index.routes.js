const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

//HOME PAGE
router.get("/", (req, res, next) => {
  if(!req.session) res.render("index");
  else res.render('profile/:id')
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


// //MATCH PAGE
router.get("/match", /*isLogged,*/ (req, res, next) => {
  users.find()
  .then(result => {
    const usersArr = result.map(element => { if(!req.session.matches[1].find(element.id)) element });
    res.render('match', usersArr[0])
  })
  .catch(err => next(err))
});
router.post("/match/:id", /*isLogged,*/ (req, res, next) => {
  const otherUser = req.params
  const myId = req.session.id
  req.session.matches.push(otherUser)
  if(otherUser.matches.find({yes, myId})) res.render("chat");
  else res.render('match')
 });

// //CHAT PAGE
// router.get("/chat/:id", isLogged, (req, res, next) => {
//   res.render("chat");
// });

// //ADMIN PAGE: Update & Delete
// router.get("/profile/:id", isAdmin, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/profile/:id", isAdmin, (req, res, next) => {
//   res.render("profile");
// });


module.exports = router;
