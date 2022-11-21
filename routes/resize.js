var express = require('express');
const { verifyUser } = require('../utils/auth');
const { get } = require('https');
const sharp = require('sharp');
var router = express.Router();

/* POST /resize
 * Accepts image path, and returns resized image
 */
router.post('/', verifyUser, function (req, res, next) {
  const { path } = req.body;
  const urlOptions = new URL(path);
  const resize = sharp().resize(50, 50).png();
  get(
    {
      host: urlOptions.host,
      path: urlOptions.pathname,
    },
    response => {
      res.attachment('thumbnail.png');
      response.pipe(resize).pipe(res);
    }
  );
});

module.exports = router;
