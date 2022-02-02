const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {}

  Student.init({
    firstName: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 20],
          msg: 'First name must be between 3 and 20 characters.',
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 20],
          msg: 'Last name must be between 3 and 20 characters.',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email.',
        },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'Age must be an integer number.',
        },
      },
    },
    weight: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: {
          msg: 'Weight must be a float number.',
        },
      },
    },
    height: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: {
          msg: 'Weight must be a float number.',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
