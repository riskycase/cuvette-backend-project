var express = require('express');
const { verifyUser } = require('../utils/auth');
var router = express.Router();

/* POST /patch
 * Accepts JSON, JSON patch and returns updated JSON
 */
router.post('/', verifyUser, function (req, res, next) {
  res.status(200).json({
    response: 'ok',
  });
});

module.exports = router;
