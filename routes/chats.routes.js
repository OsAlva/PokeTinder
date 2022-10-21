const express = require("express");
const User = require("../models/User.model");
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;
const navbarApears = require('../utils/navbar');
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get('/', (req, res, next) => {
    User.findById(req.session.currentUser._id)
        .then(result => {
            req.session.currentUser = result;
            const arrayIds = [...req.session.currentUser.matches];    
            return User.find({_id: {$in: arrayIds}})
        })
        .then(resultado => {
            const data = {match: resultado};
            data.navbarExist = {...navbarApears(req.session.currentUser)};
            res.render('chats/chatList', data);    })
        .catch((err) => {console.log(err)})

});

router.get('/create', (req, res, next) => {
    res.render('chats/create');
   // res.render('auth/signup');
})

router.post("/delete", (req, res, next)=>{
    User.findById(req.session.currentUser._id)
    .then(result => {
        console.log('RESULT BEFORE---------', result)

        // req.session.currentUser = result
        // console.log('RESULT---------', req.session.currentUser.matches)
        const deleteObjId = req.body.delete;
        const matches = req.session.currentUser.matches;
        const likes = req.session.currentUser.likes;
        console.log('DELETE ------->' , req.body.delete)
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

router.post('/:idUser', (req, res, next) => {
    const { username,email,password, img, edad,gender,phone} = req.body;
    console.log(req.body)
  // Check that username, email, and password are provided
    if (username === "" || email === "" || password === "" 
        || edad === "" || gender === "" || phone === "") {
        res.status(400).render("auth/signup", {
        errorMessage:
            "All fields are mandatory. Please provide your username, email, age, gender, phone  and password.",
        });
        return;
    }

    if (password.length < 6) {
        res.status(400).render("auth/signup", {
        errorMessage: "Your password needs to be at least 6 characters long.",
        });
        return;
    }

// Create a new user - start by hashing the password
    bcrypt
        .genSalt(saltRounds)
        .then((salt) => bcrypt.hash(password, salt))
        .then((hashedPassword) => {
// Create a user and save it in the database
        return User.create({ username, email, password: hashedPassword, img, edad, gender, phone });
        })
        .then(() => {res.redirect("/auth/login")})
        .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(500).render("auth/signup", { errorMessage: error.message });
        } else if (error.code === 11000) {
            res.status(500).render("auth/signup", {
            errorMessage:
                "Username and email need to be unique. Provide a valid username or email.",
            });
        } else {
            next(error);
        }
        });
});


  

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
