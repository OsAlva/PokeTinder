const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

// //MATCH PAGE
router.get("/", /*isLogged,*/ (req, res, next) => {
  User.find(req.session.currentUser._id)
  // {_id: {$ne: req.session.currentUser._id}}
  .then(result => {
    const currentUser = result;
    console.log('')
    res.render('match/match', {users: result});
  })
  .catch(err => {
    console.log(err)
  })
  });
router.post("/", /*isLogged,*/ (req, res, next) => {
    User.findById()
    .then(result => {

    })
    .catch(err => {
      console.log(err)
    })
   });

module.exports = router;