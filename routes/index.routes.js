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
  console.log(req.paras)
  User.findById(req.params.id)
  
});

//////////////
router.get("/:idPeli", (req, res, next)=>{
  console.log("req.params: ", req.params);
  Movie.findById(req.params.idPeli)
  .then(result => {
      const data = {
          peli: result
      }
      console.log(data);
      res.render("detall", data);    
  })
  .catch(err => {
      res.send(err);
  })
})
/////////////

 // res.render("profile");
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