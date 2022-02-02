const { Student } = require('../models');

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.status(200).json(students);
  }
}

module.exports = new StudentController();
