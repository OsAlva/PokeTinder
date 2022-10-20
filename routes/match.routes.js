const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const ObjectId = require('mongodb').ObjectId;
const navbarApears = require('../utils/navbar');

// //MATCH PAGE
router.get("/", (req, res, next) => {
  // crear array que contingui els continguts dels arraya de likes, dislikes, matches
  // spread operator

  
  const arrayIds = [...req.session.currentUser.likes, ...req.session.currentUser.dislikes, ...req.session.currentUser.matches];
  
  User.findOne({ _id: {"$nin": arrayIds}})
  // {_id: {$ne: req.session.currentUser._id}}
  .then(result => {
    console.log('RESULT -------' , result)
    console.log('CUREENTUSER -------' , req.session.currentUser)
    const data = {users: [result]};
    data.navbarExist = {...navbarApears(req.session.currentUser)};
    console.log('DATA --------------',data)
    if(result) data.usersExists = true;
    res.render('match/match', data);
  })
  .catch(err => {
    console.log(err)
  })
  });
router.post("/", /*isLogged,*/ (req, res, next) => {
    if(req.body.yes){ 
     

      console.log('aaaaa-------', req.session.currentUser.likes)
      
    

      // console.log(typeof req.body.yes)
      // if(req.session.currentUser.likes.includes(req.body.yes)){
      //   return res.redirect('/match')
      // }

      // const strLikes = JSON.stringify(req.session.currentUser.likes);
      // // console.log(strLikes, typeof strLikes)
      // const strId = JSON.stringify(req.body.yes);

      // if(strLikes.includes(strId)){
      //   return res.redirect('/match')
      // }

      const id = ObjectId(req.body.yes);
      let userExists = false;
       
      req.session.currentUser.likes.forEach(element => {
        console.log('ELEMENT --------> ', typeof element)
        if(id.equals(element)){
          userExists = true;
        }
      })

      if(userExists){
        return res.redirect('/match');
      }
     
        User.findByIdAndUpdate(req.session.currentUser._id, { "$push": { "likes": req.body.yes } }, {new: true})
        .then(result => {
          req.session.currentUser = result;
          res.redirect('/match')
        })
        .catch(err => {
          console.log(err)
        })

    } else {

      const id = ObjectId(req.body.no);
      let userExists = false;
       
      req.session.currentUser.dislikes.forEach(element => {
        console.log('ELEMENT --------> ', typeof element)
        if(id.equals(element)){
          userExists = true;
        }
      })

      if(userExists){
        return res.redirect('/match');
      }

      User.findByIdAndUpdate(req.session.currentUser._id, { "$push": { "dislikes": req.body.no } }, {new: true})
      .then(result => {
        req.session.currentUser = result;
        res.redirect('/match')
      })
      .catch(err => {
        console.log(err)
      })

    }

    });

module.exports = router;