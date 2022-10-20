const router = require("express").Router();
const User = require("../models/User.model.js");
module.exports = router;
const express = require('express');
const isAdmin = require("../middleware/isAdmin");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");

//PROFILE PAGE --oscar 
router.get("/profile/:idUser", isLoggedIn, (req, res, next) => {
  const idUser = req.params.idUser;
  //const myIdd = req.session.currentUser._id;
  console.log(idUser);
  //const myId = req.session.currentUser;
  // console.log("cogemos el id del usuario",id);
   User.findById(idUser)
   .then(result => {
     res.render('user/profile.hbs', {user: result})
  })
   .catch(err => {
    console.log(err);
    next(err)
   }) 
});

router.post("/profile/:idUser", isLoggedIn, (req, res, next) => {
  const idUser = req.params.idUser;
  const {username, email, password} = req.body;
  User.findByIdAndUpdate(idUser, {username, email, password})
  .then(result => {
    res.redirect('/profile/:idUser');
  })
  .catch(err => {
    console.log(err);
    next(err);
  })
}); 

// router.post("/profile", isLoggedIn, (req, res, next) => {
//   const {idUsers} = req.body;


////////////////7
//EDITAR PERFIL
router.post("/profile/:id/update", /*isLogged,*/ (req, res, next) => {
  res.render("profile");
});
/////////////////
  

router.post("/profile/:id/delete", /*isLogged,*/ (req, res, next) => {
  res.render("profile");
});

//HOME PAGE
router.get("/", isLoggedIn, (req, res, next) => {
  res.render('login');
});

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




 //CHAT PAGE
router.get("/chat/:id", /*isLogged,*/ (req, res, next) => {
  res.render("chat");
});
//ADMIN PAGE: Update & Delete
router.get("/profile/:id",/* isAdmin,*/ (req, res, next) => {
  res.render("profile");
});
router.post("/profile/:id",/* isAdmin,*/ (req, res, next) => {
  res.render("profile");
});

// //CHAT PAGE
// router.get("/chat/:id", isLogged, (req, res, next) => {
//   res.render("chat");
// });

// //ADMIN PAGE: Update & Delete
router.get("/admin", isAdmin, (req, res, next) => {
  res.render("admin");
});
router.post("/profile/:id", isAdmin, (req, res, next) => {
  res.render("profile");
});


module.exports = router;
