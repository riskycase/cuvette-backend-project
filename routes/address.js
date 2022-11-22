var express = require('express');
const { decode } = require('jsonwebtoken');
const db = require('../db');
const Address = require('../models/Address');
const { verifyUser } = require('../utils/auth');
var router = express.Router();

/* POST /address
 * Accepts address and adds to database
 */
router.post('/', verifyUser, function (req, res, next) {
  const { address } = req.body;
  const entry = new Address({
    username: req.username,
    address,
  });
  entry
    .save()
    .then(() => {
      res.status(200).json({
        response: 'ok',
      });
    })
    .catch(error => {
      res.status(400).json({
        response: 'error',
        error,
      });
    });
});

module.exports = router;
