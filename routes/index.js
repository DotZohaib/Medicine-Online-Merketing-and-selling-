var express = require('express');
var router = express.Router();
let userModel = require("./users")
let flash = require("connect-flash");
const passport = require('passport');
let localStrategy = require("passport-local");
let upload = require("./multer");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { error: req.flash('error') });
});


router.get('/profile', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({username: req.session.passport.user});
  res.render('profile', {user: user});
});


router.post("/upload",isLoggedIn, upload.single("image"), async function(req, res, next){
  const user = await userModel.findOne({username: req.session.passport.user});
  user.image = req.file.filename;
  await user.save();
  res.redirect("/profile");      
});


router.post("/register", function(req, res, next){
  let userdata = new userModel({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })

  userModel.register(userdata, req.body.password)
  .then(function(registereduser){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true
}), function(req, res, next){});


router.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
