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
    router.put('/:id/accept', this.accept);
    router.put('/:id/reject', this.reject);

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
          { initUsername: req.params.username || "me" },
          { secondaryUsername: req.params.username || "me" }
        ]
      }
    })
      .then((transaction) => {
        res.json(transaction);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  accept(req, res) {
    models.Transaction.findOne({
      where: {
        id: req.params.id,
        secondaryUsername: req.params.username || "me"
      }
    })
      .then((transaction) => {
        if (transaction.accepted === null){
          transaction.update({ accepted: true });
          res.json(transaction);
        } else {
          // was rejected/accepted before, can't accept again
          res.json({'status': 'error'});
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },
  reject(req, res) { // secondaryUsername can accept
    models.Transaction.findOne({
      where: {
        id: req.params.id,
        secondaryUsername: req.params.username || "me"
      }
    })
      .then((transaction) => {
        if (transaction.accepted === null){
          transaction.update({ accepted: false });
          res.json(transaction);
        } else {
          // was accepted before, can't reject, should cancel instead
          res.json({'status': 'error'});
        }
      });
  }

};
