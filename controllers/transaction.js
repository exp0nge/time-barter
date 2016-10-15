const express = require('express');
const models = require('../models');
const simpleRoutes = require('../common/routes');

const TRANSACTION_BASE_URL = '/transaction';

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.route('/create')
      .get(simpleRoutes.redirectTo(TRANSACTION_BASE_URL))
      .post(this.create);
    router.get('/:id', this.show);
    router.put('/accept/:id', this.accept);
    router.put('/reject/:id', this.reject);

    return router;
  },
  index(req, res) {
    // LIST all transactions where req.params.username == initUsername or
    // secondaryUsername
    models.Transaction.findAll({
      where: {
        $or: [
          { initUsername: req.params.username || "me" },
          { secondaryUsername: req.params.username }
        ]
      }
    })
      .then((transactions) => {
        res.json(transactions);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  create(req, res) {
    console.log(req.body);
    // POST transaction
    models.Transaction.create({
      // initUsername: req.params.username,
      initUsername: "me",
      secondaryUsername: req.body.secondaryUsername
    })
      .then((transaction) => {
        res.json(transaction);
      })
      .catch((err) => {
        res.status(500).json(err);
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
