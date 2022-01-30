const { User } = require('../models');

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (e) {
      return res.status(500).json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (e) {
      return res.status(500).send({
        errors: ['Something went wrong with the database.'],
      });
    }
  }

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);

      return res.status(200).json(newUser);
    } catch (e) {
      const sqlErrors = e.errors.map((error) => error.message);

      return res.status(400).json({
        errors: sqlErrors,
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Missing ID.'],
        });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      const updatedUser = await user.update(req.body);

      return res.json(updatedUser);
    } catch (e) {
      const sqlErrors = e.errors.map((error) => error.message);
      if (!sqlErrors[0]) sqlErrors.push('Something went wrong with the database.');

      return res.status(500).send({
        errors: sqlErrors,
      });
    }
  }
}

module.exports = new UserController();
