const router = require("express").Router();
const User = require("../models/User.model.js");
module.exports = router;
const express = require('express');
const isAdmin = require("../middleware/isAdmin");
const isLoggedIn = require("../middleware/isLoggedIn");
const navbarApears = require('../utils/navbar');



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


//EDITAR PERFIL

  
//HOME PAGE


// //LOGGIN PAGE


// //PROFILE PAGE





 //CHAT PAGE

//ADMIN PAGE: Update & Delete


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





module.exports = router;
