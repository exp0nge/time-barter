const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/create', this.create);
    router.get('/:id', this.show);
    router.put('/accept/:id', this.accept);
    router.put('/reject/:id', this.reject);

    return router;
  },
  index(req, res) {
    // LIST all transactions where req.params.username == initUsername or secondaryUsername
    models.Transaction.findAll({
      where: {
        $or: [
          { initUsername: req.params.username },
          { secondaryUsername: req.params.username }
        ]
      }
    })
      .then((transactions) => {
        res.json(transactions);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  create(req, res) {
    // POST transaction
    models.Transaction.create({
      initUsername: req.params.username,
      secondaryUsername: req.body.secondaryUsername
    })
      .then((transaction) => {
        res.json(transaction);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  show(req, res) {
    // show transaction where req.params.username == initUsername or secondaryUsername
    models.Transaction.findOne({
      where: {
        id: req.params.id,
        $or: [
          { initUsername: req.params.username },
          { secondaryUsername: req.params.username }
        ]
      }
    })
      .then((transaction) => {
        res.json({'status': 'success'});
      });
  },
  accept(req, res) {
    res.json({'status': 'success'});

  },
  reject(req, res) { // secondaryUsername can accept
    models.Transaction.findOne({
      where: {
        id: req.params.id,
        secondaryUsername: req.params.username
      }
    })
      .then((transaction) => {
        if (!transaction.accepted){
          // was accepted before, can't reject
        }
        res.json({'status': 'success'});
      });
  }

};
