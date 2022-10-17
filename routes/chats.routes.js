const express = require("express");
const User = require("../models/User.model");
const router = express.Router();

router.get('/', (req, res, next) => {
    User.findbyId()
    .then(result => {

    })
    .catch(err => {
        console.log(err)
    });
    res.render('chats/chatList');
});

router.post('/', (req, res, next) => {
 
})

module.exports = router;
