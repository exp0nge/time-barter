'use strict';

module.exports = {
    loggedIn(req, res, next) {
        if (req.user) {
            next();
        } else {
            res.redirect('/user/login');
        }

    }

};
