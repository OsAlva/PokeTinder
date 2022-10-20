const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

// //MATCH PAGE
router.get("/", /*isLogged,*/ (req, res, next) => {
    User.find()
    .then(result => {
      //const usersArr = result.map(element => { if(!req.session.matches[1].find(element.id)) element });
      res.render('match', /*usersArr[0]*/)
    })
    .catch(err => next(err))
  });
router.post("/", /*isLogged,*/ (req, res, next) => {
    const {otherUser }= req.body
    const {id} = req.session.id
    User.findById(id)
    .then(result => {
        console.log(result)
    })
    // .push(otherUser)
    // if(otherUser.matches.find({yes, id})) res.render("chat");
    // else res.render('match')
   });

module.exports = router;