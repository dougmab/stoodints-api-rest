const { Model } = require('sequelize');
const { url: apiUrl } = require('../config/appConfig');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.Student, { foreignKey: 'student_id' });
    }
  }

  User.init({
    originalname: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Field must not be empty.',
        },
      },
    },
    filename: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Field must not be empty.',
        },
      },
    },
    url: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${apiUrl}/images/${this.getDataValue('filename')}`;
      },
    },
  }, {
    sequelize,
    modelName: 'Photo',
  });

  return User;
};
