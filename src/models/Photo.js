const { Model } = require('sequelize');

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
  }, {
    sequelize,
    modelName: 'Photo',
  });

  return User;
};
