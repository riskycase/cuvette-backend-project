var express = require('express');
const { sign } = require('jsonwebtoken');
var router = express.Router();

/* POST /login
 * Accepts username, password and returns signed token
 */
router.post('/', function (req, res, next) {
  const { username, password } = req.body;
  res.status(200).json({
    response: 'ok',
    token: sign(
      {
        username,
      },
      process.env.JWT_KEY
    ),
  });
});

module.exports = router;
