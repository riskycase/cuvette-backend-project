const { verify } = require('jsonwebtoken');

function verifyUser(req, res, next) {
  verify(req.headers.bearer, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({
        error: 'Unauthorised',
      });
    } else {
      req.username = decoded.username;
      next();
    }
  });
}

module.exports = { verifyUser };
