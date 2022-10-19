const express = require("express");
const Chat = require("../models/Chatbox.model");
const router = express.Router();

router.get('/', (req, res, next) => {
    Chat.find()
    .then(result => {
        console.log(result)
        res.render('chatList.hbs', result)
    .catch(err => {
        console.log(err)
    });
});
//TODO: cambiar a POST cuando haga el formulario
router.get('/talking/:id', async (req, res, next) => {
    const thisChat = await Chat.find()
    console.log(thisChat)


    res.render('chats/talking.hbs', {...navbarApears(req.session.currentUser)});
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

// router.post("/:idPeli/delete", (req, res, next)=>{
//     User.findByIdAndDelete(req.params.idPeli)
//     .then(resultat => {
//         // console.log("resultat ", resultat);
//         // res.render("index")
//         res.redirect("/chats");
//     })
//     .catch(err => {
//       console.log("err: ", err);
//     })
//   })
  

// router.post('/create', (req, res, next) => {
//     User.create(req.body)
//     .then(result => {
//         res.redirect('/chats');
//        // res.render('auth/signup');
//     })
//     .catch(err => {
//         console.log(err)
//     })



})
module.exports = router;
