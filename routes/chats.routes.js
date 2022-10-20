const express = require("express");
const User = require("../models/User.model");
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;
const navbarApears = require('../utils/navbar');


router.get('/', (req, res, next) => {
    const arrayIds = [...req.session.currentUser.matches];
    User.find({_id: {$in: arrayIds}})
    .then(result => {
    const data = {match: result};
    data.navbarExist = {...navbarApears(req.session.currentUser)};
        res.render('chats/chatList', data);    })
    .catch(err => {
        console.log(err)
    });
});

router.get('/create', (req, res, next) => {
    res.render('chats/create');
   // res.render('auth/signup');
})

// router.post('/:idUser', (req, res, next) => {
//     console.log('PARAMS ---> ', req.params.idUser)
//     console.log('BODY ---> ', req.body)
//     User.findByIdAndUpdate(req.params.idUser, { username: req.body })
//     .then(result => {
//         console.log('WHASTS THIS: ', req.body)
//         // console.log('WHAT IS THIS: ', result)
//         res.redirect('chats');
//     })
//     .catch(err => {
//         console.log(err)
//     })
// })

router.post("/delete", (req, res, next)=>{
    User.findById(req.session.currentUser._id)
    .then(result => {
        console.log('RESULT BEFORE---------', result)

        // req.session.currentUser = result
        // console.log('RESULT---------', req.session.currentUser.matches)
        const deleteObjId = req.body.delete;
        const matches = req.session.currentUser.matches;
        const likes = req.session.currentUser.likes;
        matches.forEach((element, k) => {
            if(deleteObjId === element){
                result.matches.splice(k, 1);
            }
        })
        likes.forEach((element, k) => {
            console.log('ELEMENTO----------',element, deleteObjId)
            if(deleteObjId === element){
                result.likes.splice(k, 1);
            }
        })
        const updatedUser = result;
        User.findByIdAndUpdate(req.session.currentUser._id, {matches: updatedUser.matches, likes: updatedUser.likes}, {new: true})
        .then(result => {
            console.log('RESULT FINAL--------', result)
            req.session.currentUser = result;
            res.redirect("/chats");
        })
        .catch(err => {
            next(err)
        })

        console.log('RESULT SPLICE---------', updatedUser)
        // console.log('CURRENT USER ----------', req.session.currentUser)
        // User.findByIdAndUpdate(req.session.currentUser._id, {"matches": } )
        // .then(result => {

        // })
        // .catch(err => {
        //     console.log(err)
        // })


    })
    .catch(err => {
      console.log("err: ", err);
    })
  })
  

router.post('/create', (req, res, next) => {
    User.create(req.body)
    .then(result => {
        res.redirect('/chats');
       // res.render('auth/signup');
    })
    .catch(err => {
        console.log(err)
    })
})


module.exports = router;
