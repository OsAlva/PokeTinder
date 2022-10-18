<<<<<<< HEAD
const router = require("express").Router();
const User = require("../models/User.model.js");
//HOME PAGE
router.get("/", /*notLogged,*/ (req, res, next) => {
  res.render("index");
});
//LOGGIN PAGE
router.get("/loggin",/* notLogged,*/ (req, res, next) => {
  res.render("loggin");
});
router.post("/loggin", /*notLogged,*/ (req, res, next) => {
  res.render("profile");
});


//PROFILE PAGE --oscar 
router.get("/profile/:id", /*isLogged,*/ (req, res, next) => {
  console.log(req.session.id);
  User.findById(req.session.id)
  .then((user) => {
  // res.render("profile", { user });
   })
  .catch((err) => {
  console.log(err);
  next(err);
  });
});

//Borrar luego para agregar usuarios
router.get("/newUser", (req, res, next) => {
  res.render("newUser");
});

router.post("/newUser", (req, res, next) => {
  User.create(req.body)
  .then((user) => {
    console.log("user", user);
    const data = {
      createOk: true,
      user: result
    }
    res.render("newUser", data);
  })
  .catch((err) => {
  console.log(err);
  next(err);
  });
});
/////////////////


// router.get("/newFilm", (req, res, next)=>{
//   res.render("newFilm");
// })

// router.post("/newFilm", (req, res, next)=>{
//   Movie.create(req.body)
//   .then(result => {
//       console.log("result: ", result);
//       const data = {
//           createOk: true,
//           movie: result
//       }
//       res.render("newFilm", data);
//   })
//   .catch(err => {
//       console.log("error: ", err);
//       const data = {
//           createKo: true
//       }
//       res.render("newFilm", data);
//   })
// })
/////////////////
  


router.post("/profile/:id/update", /*isLogged,*/ (req, res, next) => {
  res.render("profile");
});
router.post("/profile/:id/delete", /*isLogged,*/ (req, res, next) => {
  res.render("profile");
});
//MATCH PAGE
router.get("/match/:id", /*isLogged, */(req, res, next) => {
  res.render("match");
});
router.post("/match/:id",/* isLogged,*/ (req, res, next) => {
  res.render("match");
});
//CHAT PAGE
router.get("/chat/:id", /*isLogged,*/ (req, res, next) => {
  res.render("chat");
});
//ADMIN PAGE: Update & Delete
router.get("/profile/:id",/* isAdmin,*/ (req, res, next) => {
  res.render("profile");
});
router.post("/profile/:id",/* isAdmin,*/ (req, res, next) => {
  res.render("profile");
});
module.exports = router;
=======
const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

//HOME PAGE
router.get("/", (req, res, next) => {
  if(!req.session) res.render("index");
  else res.render('profile/:id')
});

// //LOGGIN PAGE
// router.get("/loggin", notLogged, (req, res, next) => {
//   res.render("loggin");
// });
// router.post("/loggin", notLogged, (req, res, next) => {
//   res.render("profile");
// });

// //PROFILE PAGE
// router.get("/profile/:id", isLogged, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/profile/:id/create", isLogged, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/profile/:id/update", isLogged, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/profile/:id/delete", isLogged, (req, res, next) => {
//   res.render("profile");
// });


// //MATCH PAGE
router.get("/match", /*isLogged,*/ (req, res, next) => {
  users.find()
  .then(result => {
    const usersArr = result.map(element => { if(!req.session.matches[1].find(element.id)) element });
    res.render('match', usersArr[0])
  })
  .catch(err => next(err))
});
router.post("/match/:id", /*isLogged,*/ (req, res, next) => {
  const otherUser = req.params
  const myId = req.session.id
  req.session.matches.push(otherUser)
  if(otherUser.matches.find({yes, myId})) res.render("chat");
  else res.render('match')
 });

// //CHAT PAGE
// router.get("/chat/:id", isLogged, (req, res, next) => {
//   res.render("chat");
// });

// //ADMIN PAGE: Update & Delete
// router.get("/profile/:id", isAdmin, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/profile/:id", isAdmin, (req, res, next) => {
//   res.render("profile");
// });


module.exports = router;
>>>>>>> 2fbcb884ff2ecab74d792dcb426d4de8e4a90ded
