const { Student, Photo } = require('../models');

class StudentController {
  async index(req, res) {
    const students = await Student.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['url', 'filename'],
      },
    });

    res.status(200).json(students);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const student = await Student.findByPk(id, {
        attributes: ['id', 'firstName', 'lastName', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['url', 'filename'],
        },
      });

      res.status(200).json(student);
    } catch (e) {
      res.status(500).json({ errors: ['Something went wrong with the database.'] });
    }
  }

  async store(req, res) {
    try {
      const newStudent = await Student.create(req.body);

      const {
        id, firstName, lastName, email, age, weight, height,
      } = newStudent;

      res.status(200).json({
        id, firstName, lastName, email, age, weight, height,
      });
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

      const {
        firstName, lastName, email, age, weight, height,
      } = updatedStudent;

      res.status(200).json({
        id, firstName, lastName, email, age, weight, height,
      });
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

      const {
        firstName, lastName, email, age, weight, height,
      } = student;

      res.status(200).json({
        id, firstName, lastName, email, age, weight, height,
      });
    } catch (e) {
      res.status(500).json({ errors: ['Something went wrong with the database.'] });
    }
  }
}

module.exports = new StudentController();
