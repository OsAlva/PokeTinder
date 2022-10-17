const express = require('express');
const router = require("express").Router();

// //HOME PAGE
// router.get("/", notLogged, (req, res, next) => {
//   res.render("index");
// });

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
// router.post("/profile/create", isLogged, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/profile/:id/update", isLogged, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/profile/:id/delete", isLogged, (req, res, next) => {
//   res.render("profile");
// });


// //MATCH PAGE
// router.get("/match", isLogged, (req, res, next) => {
//   res.render("match");
// });
// router.post("/match/:id", isLogged, (req, res, next) => {
//   res.render("match");
// });

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
