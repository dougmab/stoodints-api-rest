const { User } = require('../models');

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'username', 'email'] });

      return res.json(users);
    } catch (e) {
      return res.status(500).json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id, { attributes: ['id', 'username', 'email'] });

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

      const { id, username, email } = newUser;

      return res.status(200).json({ id, username, email });
    } catch (e) {
      const sqlErrors = e.errors.map((error) => error.message);

      return res.status(400).json({
        errors: sqlErrors,
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      const updatedUser = await user.update(req.body);
      const { id, username, email } = updatedUser;

      return res.json({ id, username, email });
    } catch (e) {
      const sqlErrors = e.errors.map((error) => error.message);
      if (!sqlErrors[0]) sqlErrors.push('Something went wrong with the database.');

      return res.status(500).send({
        errors: sqlErrors,
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      await user.destroy();

      const { id, username, email } = user;

      return res.json({ id, username, email });
    } catch (e) {
      return res.status(500).send({
        errors: ['Something went wrong with the database.'],
      });
    }
  }
}

module.exports = new UserController();
