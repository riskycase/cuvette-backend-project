var express = require('express');
const { apply_patch } = require('jsonpatch');
const { verifyUser } = require('../utils/auth');
var router = express.Router();

/* POST /patch
 * Accepts JSON, JSON patch and returns updated JSON
 */
router.post('/', verifyUser, function (req, res, next) {
  const { json, patch } = req.body;
  try {
    const newJson = apply_patch(json, patch);
    res.status(200).json({
      response: 'ok',
      newJson,
    });
  } catch (error) {
    res.status(400).json({
      response: 'error',
      error,
    });
  }
});

module.exports = router;
