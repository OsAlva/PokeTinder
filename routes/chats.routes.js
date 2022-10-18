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
})

router.post('/create', (req, res, next) => {
    User.create(req.body)
    .then(result => {
        res.redirect('/chats');
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;
