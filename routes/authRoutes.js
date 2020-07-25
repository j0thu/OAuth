const router = require('express').Router();
const passport = require('passport')
//Auth Login
router.get('/login', (req, res)=>{
    res.render('login');
})

//Auth with Google
router.get('/google', passport.authenticate('google', {
    scope:['profile']
})); 

//Auth Logout
router.get('/logout', (req, res)=>{
    res.send('Logging out');
})


//callback route fior google to redirect to 
router.get('/google/redirect', (req, res)=>{
    res.send('You reached the callback URI')
})

module.exports = router;