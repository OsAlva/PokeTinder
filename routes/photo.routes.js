const express = require('express');
const router = express.Router();
const fileUploader = require('../config/cloudinary.config');
const User = require('../models/User.model');
//const Photo = require('../models/Photo.model');

//GET ruta para mostrar el form para crear una nueva foto
router.get('/create', (req, res, next) => {
    res.render('user/create-photo');
})

//POST para add una nueva foto a claudinary
router.post('/create', fileUploader.single('photo-cover-image'), (req, res) => {
  const {  } = req.body;
 // User.updateOne({ _id: req.session.currentUser._id }, { $set: { photo: req.file.path } })

    User.create({ img: req.file.path })
      .then(newlyCreatedMovieFromDB => {
        console.log(newlyCreatedMovieFromDB);
      })
      .catch(error => console.log(`Error while creating a new photo: ${error}`));
  });


module.exports = router;
