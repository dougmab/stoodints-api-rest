const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required.'],
    });
  }

  const [scheme, token] = authorization.split(' '); // eslint-disable-line

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email, username } = data;

    const user = await User.findOne({
      where: { id, email, username },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Invalid user.'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    req.userName = username;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Invalid or expired token.'],
    });
  }
};
