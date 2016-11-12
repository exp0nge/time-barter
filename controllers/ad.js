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
		router.get('/', this.index);
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
		res.render('ad/new/index');
	},

	id(req, res) {
			res.render('ad/single/index', {
				barter: 'username',
				datetime: Date.now(),
				role: 'Painter'
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
