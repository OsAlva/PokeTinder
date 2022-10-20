const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const ObjectId = require('mongodb').ObjectId;
const navbarApears = require('../utils/navbar');

// //MATCH PAGE
<<<<<<< HEAD
router.get("/", /*isLogged,*/ (req, res, next) => {
    User.find()
    .then(result => {
      //const usersArr = result.map(element => { if(!req.session.matches[1].find(element.id)) element });
      res.render('match', /*usersArr[0]*/)
    })
    .catch(err => next(err))
=======
router.get("/", (req, res, next) => {
  // crear array que contingui els continguts dels arraya de likes, dislikes, matches
  // spread operator

  
  const arrayIds = [...req.session.currentUser.likes, ...req.session.currentUser.dislikes, ...req.session.currentUser.matches, req.session.currentUser];
  
  User.findOne({ _id: {"$nin": arrayIds}})
  // {_id: {$ne: req.session.currentUser._id}}
  .then(result => {
    // console.log('RESULT -------' , result)
    // console.log('CUREENTUSER -------' , req.session.currentUser)
    const data = {users: [result]};
    data.navbarExist = {...navbarApears(req.session.currentUser)};
    // console.log('DATA --------------',data)
    if(result) data.usersExists = true;
    res.render('match/match', data);
  })
  .catch(err => {
    console.log(err)
  })
>>>>>>> 0738d7563665c31a17e3f751fa16d5be852afff6
  });

router.post("/", /*isLogged,*/ (req, res, next) => {
<<<<<<< HEAD
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
=======

    if(req.body.yes){ 

      const idLike = ObjectId(req.body.yes);
      
      //check if userexists in current likes array
      let userExists = false;
      req.session.currentUser.likes.forEach(element => {
        // console.log('ELEMENT --------> ', typeof element)
        if(idLike.equals(element)){
          userExists = true;
        }
      })

      if(userExists){
        return res.redirect('/match');
      }
     
      // if the other user is not in current likes array, updatear currentuser likes array

        User.findByIdAndUpdate(req.session.currentUser._id, { "$push": { "likes": req.body.yes } }, {new: true})
        .then(result => {
          // console.log('LIKES------------', typeof req.session.currentUser._id)
          //find likes in match user likes array

          User.findById(req.body.yes)

          .then(userLike => {

            const myObjectId = ObjectId(req.session.currentUser._id);

            // console.log('USERLIKE ==========', userLike)

            // let likeExists = false;
       
            userLike.likes.forEach(element => {
              // console.log('ELEMENT --------> ', typeof element)
              if(myObjectId.equals(element)){

                const updateMyMatches = User.findByIdAndUpdate(req.session.currentUser._id, { "$push": { "matches": idLike } })
                .then()
                .catch(err => {
                  console.log(err)
                })

                const updateTheirMatches = User.findByIdAndUpdate(req.body.yes, { "$push": { "matches": myObjectId } })
                .then()
                .catch(err => {
                  console.log(err)
                })

                Promise.all([updateMyMatches, updateTheirMatches])
                .then(result => {
                    console.log('PROMISES ALL COMPLETE=====' )
                })
                .catch(err => {
                  console.log(err)
                })


              } 
            })
      
        
          })
          .catch(err => {
            console.log(err)
          })

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
        // console.log('ELEMENT --------> ', typeof element)
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
>>>>>>> 0738d7563665c31a17e3f751fa16d5be852afff6

module.exports = router;