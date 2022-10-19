const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

// //MATCH PAGE
router.get("/", /*isLogged,*/ (req, res, next) => {
  User.find()
  // {_id: {$ne: req.session.currentUser._id}}
  .then(result => {
    res.render('match/match', {users: result});
  })
  .catch(err => {
    console.log(err)
  })
  });
router.post("/", /*isLogged,*/ (req, res, next) => {
    User.findById(req.session.currentUser._id)
    .then(result => {
      const logedUser = result;
      console.log('BODYYY----------------->', req.body)
      // logedUser.likes.push(req.body)
      console.log('whats is this ----------------->', logedUser.likes)
      
      res.render('match/match', logedUser.username)
    })
    .catch(err => {
      console.log(err)
    })
   });

module.exports = router;