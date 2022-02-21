const jwt = require('jsonwebtoken');
const { User } = require('../models');

class TokenController {
  async store(req, res) {
    const { email, password } = req.body;

    if (!email && !password) {
      return res.status(401).json({
        errors: ['Invalid credentials.'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['User does not exist.'],
      });
    }

    if (!(await user.isPasswordValid(password))) {
      return res.status(401).json({
        errors: ['Invalid password.'],
      });
    }

    const { id, username } = user;

    const token = jwt.sign({ id, email, username }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRE,
    });

    return res.json({ token, user: { username, id, email } });
  }
}

module.exports = new TokenController();
