const express = require('express');
const models = require('../models');

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

		router.get('/', this.index);
		router.post('/', this.new);
		router.get('/:id', this.single);
		router.put('/:id/update', this.update);
		router.put('/:id/deactivate', this.deactivate);
		router.put('/:id/activate', this.activate);
		router.delete('/:id/delete', this.delete);
		return router;
	},
	index(req, res){
		res.render('ad/index');
	},
	new(req, res) {
		models.Ad.create({
			username: req.body.email,
			title: req.body.title,
			description: req.body.description,
			lookingFor: req.body.lookingFor,
			phone: req.body.phone,
			email: req.body.email
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
					id: req.params.id
				}
			})
				.then((ad) => {
					if (!ad) {
						res.render('404');
					} else {
						res.render('ad/single/index', {
							ad: ad
						});
					}

				})
				.catch((err) => {
					console.log(err);
					res.sendStatus(500);
				});
	},

	update(req,res) {
		//update :id

		res.render('ad/edit/index');

	},

	deactivate(req,res) {
		//deactivate :id
	},

	activate(req,res) {
		//activate :id
	},

	delete(req,res) {
		//delete :id
	}
};
