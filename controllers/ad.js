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

		router.post('/new', this.new);
		router.get('/:id', this.id);
		router.get('/');
		router.put('/:id/update', this.update);
		router.put('/:id/deactivate', this.deactivate);
		router.put('/:id/activate', this.activate);
		router.delete('/:id/delete', this.delete);
		return router;
	},

	new(req, res) {
		models.Ad.new({
			username: req.Ad.username,
			title: req.Ad.title,
			description: req.Ad.description,
			email: req.Ad.username
		});
	},

	id(req, res) {
		res.render('Ad/:id');
	},

	update(req,res) {
		//update :id
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
