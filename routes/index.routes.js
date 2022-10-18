const router = require("express").Router();
const User = require("../models/User.model.js");
module.exports = router;
const express = require('express');
<<<<<<< HEAD
const isAdmin = require("../middleware/isAdmin");

//HOME PAGE
router.get("/", /*notLogged,*/ (req, res, next) => {
  res.render("index");
});

//LOGGIN PAGE
// router.get("/loggin",/* notLogged,*/ (req, res, next) => {
//   res.render("loggin");
// });
// router.post("/loggin", /*notLogged,*/ (req, res, next) => {
//   res.render("profile");
// });


//PROFILE PAGE --oscar 
router.get("/profile/:id", /*isLogged,*/ (req, res, next) => {
  console.log(req.session.id);
  User.findById(req.session.id)
  .then((user) => {
    res.render("profile", { user });
   })
  .catch((err) => {
  console.log(err);
  next(err);
  });
});

// //Borrar luego para agregar usuarios
// router.get("/newUser", (req, res, next) => {
//   res.render("newUser");
// });

// router.post("/newUser", (req, res, next) => {
//   User.create(req.body)
//   .then((user) => {
//     console.log("user", user);
//     const data = {
//       createOk: true,
//       user: result
//     }
//     res.render("newUser", data);
//   })
//   .catch((err) => {
//   console.log(err);
//   next(err);
//   });
// });

//EDITAR PERFIL
router.post("/profile/:id/update", /*isLogged,*/ (req, res, next) => {
  res.render("profile");
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
  

router.post("/profile/:id/delete", /*isLogged,*/ (req, res, next) => {
  res.render("profile");
});
=======
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const User = require('../models/User.model');
>>>>>>> aa4ca194587c7bf5dddc05df67ef8d18280567a5

//HOME PAGE
router.get("/", isLoggedIn, (req, res, next) => {
  res.render('profile')
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

// //CHAT PAGE
// router.get("/chat/:id", isLogged, (req, res, next) => {
//   res.render("chat");
// });

// //ADMIN PAGE: Update & Delete
<<<<<<< HEAD
router.get("/admin", isAdmin, (req, res, next) => {
  res.render("admin");
});
router.post("/profile/:id", isAdmin, (req, res, next) => {
  res.render("profile");
});


=======
// router.get("/admin/:id", isAdmin, (req, res, next) => {
//   res.render("profile");
// });
// router.post("/admin/:id", isAdmin, (req, res, next) => {
//   res.render("profile");
// });
>>>>>>> aa4ca194587c7bf5dddc05df67ef8d18280567a5


module.exports = router;
