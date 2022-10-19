const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const isLoggedIn = require('../middleware/isLoggedIn');
const navbarApears = require('../utils/navbar');
const Chat = require('../models/Chatbox.model');

// //MATCH PAGE
router.get("/", isLoggedIn, async (req, res, next) => {
    try {
        const id = req.session.currentUser._id
        const myUser = await User.findById(id)
        const myMatches = myUser.matches
        const others = await User.find()
        const usersArr = others.map(other => { if(!myMatches.includes(other._id)) return other })
        const patata = {...usersArr[0], ...navbarApears(req.session.currentUser)}
        res.render('match', patata)
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
router.post("/", isLoggedIn, async (req, res, next) => {
    const other = req.body;
    const otherId = other.userId;
    const otherResolution = other.resolution;
    const otherUser = await User.findById(otherId)
    const myId = req.session.currentUser._id;
    const myUser = await User.findById(myId)
    const chatContacts = [];
    console.log(otherUser.matches[0])
    otherUser.matches.forEach(element => {
        console.log('patatateam' , element);
        if(element.userId == myId & element.resolution == 'yes') {
            element.updateOne({resolution: 'yes'}, {userId: otherId})
        }
        if(myUser.matches.resolution == otherUser.matches.resolution){
            Chat.create({ myId, otherId })
        }
    })
    res.redirect("match")

    
    // 


    
    // .then(result => {
    //     console.log('hola, este es el resultado: ', result)
    // })
    // .push(other)
    // if(other.matches.find({yes, id})) res.render("chat");
    // else res.render('match')
   });

module.exports = router;