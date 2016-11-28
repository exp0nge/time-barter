const express = require('express');
const models = require('../models');
const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');


module.exports = {
    registerRouter() {
        const router = express.Router();

        router.get('/', this.index);
        router.get('/login', this.index);
        router.post('/login', this.login);
        router.get('/register', this.register);
        router.post('/register', this.createUser);
        router.get('/logout', this.logout);

        return router;
    },
    index(req, res) {
        res.render('auth/login');
    },
    login(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/user'
        })(req, res, next);
    },
    register(req, res) {
        res.render('auth/register');
    },
    createUser(req, res, next) {
        bcrypt.hash(req.body.password, null, null, (err, hash) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            models.User.create({
                    email: req.body.email,
                    username: req.body.username,
                    phone: req.body.phone,
                    password: hash
                })
                .done((user) => {
                    if (user){
                        passport.authenticate('local', {
                            successRedirect: '/',
                            failureRedirect: '/user'
                        })(req, res, next);
                    } else {
                        res.sendStatus(401);
                    }
                });
        });
    },
    logout(req, res) {
        req.logout();
        res.redirect('/');
    }

}
