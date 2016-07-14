const usersCtrl = require(`./usersCtrl`);
const passport = require("passport")
const passportjs = require(`../config/passport.js`);
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;


module.exports = app => {
    app.post(`/api/users`,  usersCtrl.postUsers);
    app.get(`/api/users`, usersCtrl.getUsers);
    app.get(`/api/user/:id`,  usersCtrl.getOneUser)
    app.delete(`/api/user/:id`, usersCtrl.deleteOneUser);
    app.put(`/api/user/:id`,  usersCtrl.updateUser);
    
    app.get(`/auth/google`,   passport.authenticate(`google`, {scope: [`email`, `profile`]}));
    
    app.get(`/auth/google/callback`, passport.authenticate(`google`, { successRedirect: "/#/app2/optical/client-dashboard", failureRedirect: "/optical/homepage"}));
    
    
    app.post(`/api/pictures`,  usersCtrl.postPictures);
    app.get(`/api/pictures`,  usersCtrl.getPictures);
    app.get(`/api/pictures/:id`,  usersCtrl.getOnePicture)
    app.delete(`/api/pictures/:id`,  usersCtrl.deleteOnePicture);
    
//    function isLoggedIn(req, res, next) {
//
//    // if user is authenticated in the session, carry on
//    if (req.isAuthenticated())
//        return next();
//
//    // if they aren't redirect them to the home page
//    res.redirect('/#/optical/homepage');
//}
//    function isAdmin(req, res, next) {
//
//    // if user is authenticated in the session, carry on
//    if (req.users.isAdmin)
//        res.redirect('/#/app/optical/dashboard');
//
//    // if they aren't redirect them to the home page
//    res.redirect('/#/app2/optical/client-dashboard');
//}
}