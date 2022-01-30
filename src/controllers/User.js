const db = require('../models');

class UserController {
  async store(req, res) {
    try {
      const newUser = await db.User.create(req.body);
      res.status(200).json(newUser);
    } catch (e) {
      const sqlErrors = e.errors.map((error) => error.message);
      res.status(400).json({
        errors: sqlErrors,
      });
    }
  }
}

module.exports = new UserController();
