const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

// //MATCH PAGE
router.get("/", /*isLogged,*/ async (req, res, next) => {
    try {
        const id = req.session.currentUser._id
        const myUser = await User.findById(id)
        const myMatches = myUser.matches
        const others = await User.find()
        const usersArr = others.map(other => { if(!myMatches.includes(other._id)) return other })
        res.render('match', usersArr[0])
    }
    catch (err) { next(err) }
});
// router.get("/", /*isLogged,*/ (req, res, next) => {
//     const id = req.session.currentUser._id
//     User.findById(id)
//     .then(result => {
//         const myMatches = result.matches
//         User.find()
//         .then(allUsers => {
//         const usersArr = allUsers.map(other => { if(!myMatches.includes(other._id)) return other })
//         res.render('match', usersArr[0])
//         })
//         .catch(err => next('segunda promise', err))
//         })
//     .catch(err => next('primera promise', err))
//   });
router.post("/", /*isLogged,*/ async (req, res, next) => {
    const other = req.body
    const otherId = other.userId;
    const otherResolution = other.resolution;
    const otherResult = await User.findById(otherId)
    const myId = req.session.currentUser._id
    const result = await User.findById(myId)
    
    console.log('el otro el otro el otro', otherResult)
    console.log('a que este es el mismo? ', result)
    
    // result.matches.push(other)
    // console.log('rickrickrick rickrickrick rickrickrick', result.matches)
    // if(otherResult.matches.find(myId) & otherResult.matches == 'yes') res.render("chat")


    
    // .then(result => {
    //     console.log('hola, este es el resultado: ', result)
    // })
    // .push(other)
    // if(other.matches.find({yes, id})) res.render("chat");
    // else res.render('match')
   });

module.exports = router;