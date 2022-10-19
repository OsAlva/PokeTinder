module.exports = (req, res, next) => {
  console.log('IS ADMIIINNN!!!!')
    // checks if the user is logged in when trying to access a specific page
    if (!req.session.isAdmin == false) {
      return res.redirect("/admin");
    }
  
    next();
  };
  