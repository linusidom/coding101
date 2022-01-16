const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../schemas/userSchema')
const bcrypt = require('bcryptjs')


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, async function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!await bcrypt.compare(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

module.exports = {passport}