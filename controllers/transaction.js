const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/create', this.create);
    router.get('/:id', this.show);
    router.put('/update/:id', this.update);
    router.delete('/delete/:id', this.delete);

    return router;
  },
  index(req, res) {
    // LIST all transactions
    res.send('TODO');
  },
  create(req, res) {
    // POST transaction
    res.send('TODO');
  },
  show(req, res) {
    res.send('TODO');
  },
  update(req, res) {
    res.send('TODO');
  },
  delete(req, res) {
    res.send('TODO');
  }

}
