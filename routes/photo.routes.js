const express = require('express');
const router = express.Router();
const fileUploader = require('../config/cloudinary.config');
const User = require('../models/User.model');

//GET ruta para mostrar el form para crear una nueva foto
router.get('/create', (req, res, next) => {
    res.render('user/create-photo');
})

//POST para add una nueva foto a claudinary
router.post('/create', fileUploader.single('photo-cover-image'), (req, res) => {
    const algo = req.body;
    console.log("REQ.BODY", algo);

   
    Photo.create({ title, description, imageUrl: req.file.path })
      .then(newlyCreatedMovieFromDB => {
        console.log(newlyCreatedMovieFromDB);
      })
      .catch(error => console.log(`Error while creating a new movie: ${error}`));
  });


module.exports = router;
