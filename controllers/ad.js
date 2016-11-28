const express = require('express');
const models = require('../models');
const utils = require('../middlewares/auth-utils');

/*
POST /new
GET /:id
GET /
PUT /:id/update
PUT /:id/deactivate *
PUT /:id/activate *
DELETE /:id/delete
*/

module.exports = {
    registerRouter() {
        const router = express.Router();

        router.get('/', utils.loggedIn, this.index);
        router.get('/add', utils.loggedIn, this.add);
        router.post('/', utils.loggedIn, this.create);
        router.get('/:id', this.single);
        router.put('/:id/update', utils.loggedIn, this.update);
        router.put('/:id/deactivate', utils.loggedIn, this.deactivate);
        router.put('/:id/activate', utils.loggedIn, this.activate);

        router.post('/:id/delete', this.delete);
        router.delete('/:id/delete', this.delete);
        return router;
    },
    index(req, res) {
        models.Ad.findAll({
                where: {
                    UserId: req.user.id
                }
            })
            .then((ads) => {
                res.render('ad/index', {
                    ads: ads
                });
            });
    },
    add(req, res) {
        res.render('ad/new/add');
    },
    create(req, res) {
        models.Ad.create({
                UserId: req.user.id,
                title: req.body.title,
                description: req.body.description,
                lookingFor: req.body.lookingFor
            })
            .then((ad) => {
                res.redirect('/ad/' + ad.id);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });

    },
    single(req, res) {
        models.Ad.findOne({
                where: {
                    id: parseInt(req.params.id)
                }
            })
            .then((ad) => {

                models.User.findById(ad.UserId)
                    .then((user) => {
						ad.user = user;
                        if (!ad) {
                            res.render('404');
                        } else {
                            res.render('ad/single/index', {
                                ad: ad
                            });
                        }
                    })

            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
    },

    update(req, res) {
        //update :id

        res.render('ad/edit/index');

    },

    deactivate(req, res) {
        //deactivate :id
    },

    activate(req, res) {
        //activate :id
    },

    delete(req, res) {
        //delete :id
        models.Ad.destroy({
                where: {
                    UserId: req.user.id,
                    id: req.params.id
                }
            })
            .then(() => {
                res.render('ad/edit/delete-success');
            })
            .catch((err) => {
                res.status(500);
                res.render('500');
            })
    }
};
