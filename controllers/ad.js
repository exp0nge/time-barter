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
		router.get('/add', this.add);
		router.post('/', this.create);
		router.get('/:id', this.single);
		router.put('/:id/update', this.update);
		router.put('/:id/deactivate', this.deactivate);
		router.put('/:id/activate', this.activate);

		router.post('/:id/delete', this.delete);
		router.delete('/:id/delete', this.delete);
		return router;
	},
	index(req, res){
		models.Ad.findAll(
			{
				where: {
					username: req.user.email
				}
			}
		)
			.then((ads) => {
				res.render('ad/index', { ads: ads });
			});
	},
	add(req, res){
		res.render('ad/new/add');
	},
	create(req, res) {
		models.Ad.create({
			username: req.user.email,
			title: req.body.title,
			description: req.body.description,
			lookingFor: req.body.lookingFor,
			phone: req.body.phone,
			email: req.user.email
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
		models.Ad.destroy({
			where: {
				//username: req.user.username,
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
