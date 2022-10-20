const express = require("express");
const User = require("../models/User.model");
const router = express.Router();

router.get('/', (req, res, next) => {
    User.find()
    .then(result => {
        res.render('chats/chatList', {match: result});    })
    .catch(err => {
        console.log(err)
    });
});

router.get('/create', (req, res, next) => {
    res.render('chats/create');
   // res.render('auth/signup');
})

router.post('/:idUser', (req, res, next) => {
    console.log('PARAMS ---> ', req.params.idUser)
    console.log('BODY ---> ', req.body)
    User.findByIdAndUpdate(req.params.idUser, { username: req.body })
    .then(result => {
        console.log('WHASTS THIS: ', req.body)
        // console.log('WHAT IS THIS: ', result)
        res.redirect('chats');
    })
    .catch(err => {
        console.log(err)
    })
})

router.post("/:idPeli/delete", (req, res, next)=>{
    User.findByIdAndDelete(req.params.idPeli)
    .then(resultat => {
        // console.log("resultat ", resultat);
        // res.render("index")
        res.redirect("/chats");
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
