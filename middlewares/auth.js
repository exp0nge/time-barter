const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const models = require('../models');

/*
Src: https://github.com/medgardo/ctp-microblog/blob/master/blog/middlewares/authentication.js
*/

passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    (email, passwd, done) => {
        console.log('in passport localstrat');
        models.User.findOne({
                where: {
                    email: email
                }
            })
            .then((user) => {
                if (user) {
                    bcrypt.compare(passwd, user.password, (err, res) => {
                        if (err) {
                            console.log(err);
                            return done(err);
                        } else if (res === true) {
                            return done(null, user, {
                                message: 'Successfully authenticated!'
                            });
                        } else {
                            return done(null, false, {
                                message: 'Username/password is incorrect.'
                            });
                        }
                    });
                } else {
                    return done(null, false, {
                        message: 'Username/password is incorrect.'
                    });

                }
            });

    }

));

passport.serializeUser((user, done) => {
    done(null, user.email);
});

passport.deserializeUser((username, done) => {
    models.User.findOne({
            where: {
                email: username
            }
        })
        .then((user) => {
            if (user == null) {
                return done(null, false);
            }

            return done(null, user);
        });
});


module.exports = passport;
