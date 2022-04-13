LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const loginCheck = passport => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            console.log("wrong email");
            return done();
          }
          if (user.statu != "Active") {
            console.log("block");
            return done();
          }
          if(password == user.password)
          {
              return done(null, user);
        }else {
              console.log("Wrong password");
              return done();
            }
        })
        User.updateOne({email: email },{$set: {login_date : Date.now()}},function(err) {
          if(err) return console.log(err);
        })
        .catch((error) => console.log(error));
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user);
    });
  });
};
module.exports = {
  loginCheck,
};