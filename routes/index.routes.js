const router = require("express").Router();
const User = require("../models/User.model.js");
module.exports = router;
const express = require('express');
const isAdmin = require("../middleware/isAdmin");
const isLoggedIn = require("../middleware/isLoggedIn");
const navbarApears = require('../utils/navbar');
const { get } = require("mongoose");
const isLoggedOut = require("../middleware/isLoggedOut.js");

router.get("/", isLoggedOut, (req, res, next) => {
  res.redirect('/auth/login');
})

//PROFILE PAGE --oscar 
router.get("/profile", isLoggedIn, (req, res, next) => {
  console.log('whats is this user---------', req.session.currentUser)
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

router.post("/profile", isLoggedIn, (req, res, next) => {
  res.redirect('/profile/edit');
})

router.get('/profile/edit', isLoggedIn, (req, res, next) => {
  const data = {user: req.session.currentUser}
  data.navbarExist = {...navbarApears(req.session.currentUser)};
  res.render('user/profile-edit', data);
})

router.post('/profile/edit', isLoggedIn, (req, res, next) => {
  User.findByIdAndUpdate(req.session.currentUser._id, 
    {username: req.body.username,
      // password: req.body.password,
      edad: req.body.edad,
      gender: req.body.gender,
      phoneMe: req.body.phoneMe
    }, 
    {new: true})
  .then(result => {
 
    req.session.currentUser = result;
    res.redirect('/profile');
  })
  .catch(err => {
    next(err)
  })
})

//EDITAR PERFIL

  
//HOME PAGE


// //LOGGIN PAGE


// //PROFILE PAGE





 //CHAT PAGE

//ADMIN PAGE: Update & Delete


// //CHAT PAGE

// //ADMIN PAGE: Update & Delete
router.get("/admin", (req, res, next) => {
  User.find({ username: {"$ne": "admin"}})
  .then(result => {
    res.render("admin/admin", {users: result});
    })
  .catch(err => {
      console.log(err)
  });
});

router.post("/admin", (req, res, next) => {
  User.findByIdAndDelete(req.body.userDelete)
  .then(result => {
    res.redirect('/admin');
  })
  .catch(err => {
    next(err)
  })

} )





module.exports = router;
