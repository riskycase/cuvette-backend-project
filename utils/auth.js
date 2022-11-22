const { verify } = require('jsonwebtoken');

function verifyUser(req, res, next) {
  console.log(req.headers);
  verify(req.headers.bearer, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({
        error: 'Unauthorised',
      });
      console.error(err);
    } else {
      console.log(decoded);
      req.username = decoded.username;
      next();
    }
  });
}

module.exports = { verifyUser };
