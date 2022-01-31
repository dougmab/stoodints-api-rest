const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    isPasswordValid = (password) => bcrypt.compare(password, this.password_hash);
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [4, 20],
          msg: 'Username must be between 3 and 20 characters.',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: '',
      unique: {
        msg: 'Email already exists.',
      },
      validate: {
        len: {
          args: [4, 255],
          msg: 'Invalid email.',
        },
      },
    },
    password_hash: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    password: {
      type: DataTypes.VIRTUAL,
      defaultValue: '',
      validate: {
        len: {
          args: [6, 50],
          msg: 'Password must be between 6 and 50 characters.',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeSave', async (user) => {
    if (user.password) {
      user.password_hash = await bcrypt.hash(user.password, 8);
    }
  });

  return User;
};
