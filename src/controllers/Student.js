const { Student } = require('../models');

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.status(200).json(students);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const student = await Student.findByPk(id);

      res.status(200).json(student);
    } catch (e) {
      res.status(500).json({ errors: ['Something went wrong with the database.'] });
    }
  }

  async store(req, res) {
    try {
      const newStudent = await Student.create(req.body);

      res.status(200).json(newStudent);
    } catch (e) {
      const sqlErrors = e.errors.map((err) => err.message);
      if (!sqlErrors[0]) sqlErrors.push('Something went wrong with the database.');

      res.status(500).json({ errors: sqlErrors });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const student = await Student.findByPk(id);

      const updatedStudent = await student.update(req.body);

      res.status(200).json(updatedStudent);
    } catch (e) {
      const sqlErrors = e.errors.map((err) => err.message);
      if (!sqlErrors[0]) sqlErrors.push('Something went wrong with the database.');

      res.status(500).json({ errors: sqlErrors });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const student = await Student.findByPk(id);

      await student.destroy();
      res.status(200).json(student);
    } catch (e) {
      res.status(500).json({ errors: ['Something went wrong with the database.'] });
    }
  }
}

module.exports = new StudentController();
