const router = require("express").Router();
const User = require("../models/User.model.js");
module.exports = router;
const express = require('express');
const isAdmin = require("../middleware/isAdmin");
const isLoggedIn = require("../middleware/isLoggedIn");
<<<<<<< HEAD
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

=======
const navbarApears = require('../utils/navbar');
const { get } = require("mongoose");
const isLoggedOut = require("../middleware/isLoggedOut.js");

router.get("/", isLoggedOut, (req, res, next) => {
  res.redirect('/auth/login');
})

//PROFILE PAGE --oscar 
router.get("/profile", isLoggedIn, (req, res, next) => {
  User.findOne(req.session.currentUser)
  .then(result => {
    const data = {user: result};
    data.navbarExist = {...navbarApears(req.session.currentUser)};
    res.render('user/profile', data);
  })
  .catch(err => {
    console.log(err)
  }) 
});

>>>>>>> 0738d7563665c31a17e3f751fa16d5be852afff6

////////////////7
//EDITAR PERFIL
<<<<<<< HEAD
router.post("/profile/:id/update", /*isLogged,*/ (req, res, next) => {
  res.render("profile");
});
/////////////////
=======

>>>>>>> 0738d7563665c31a17e3f751fa16d5be852afff6
  
//HOME PAGE
<<<<<<< HEAD
router.get("/", isLoggedIn, (req, res, next) => {
  res.render('login');
});

=======


// //LOGGIN PAGE


// //PROFILE PAGE


>>>>>>> 0738d7563665c31a17e3f751fa16d5be852afff6



 //CHAT PAGE

//ADMIN PAGE: Update & Delete
<<<<<<< HEAD
=======


// //CHAT PAGE

// //ADMIN PAGE: Update & Delete
router.get("/admin", (req, res, next) => {
  User.find()
  .then(result => {
    res.render("admin/admin", {users: result});
    })
  .catch(err => {
      console.log(err)
  });
});



>>>>>>> 0738d7563665c31a17e3f751fa16d5be852afff6


module.exports = router;
