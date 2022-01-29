const db = require('../models');

class HomeController {
  async index(req, res) {
    try {
      const newStudent = await db.Student.create({
        firstName: 'Miranda',
        lastName: 'Souza',
        email: 'mirandinha2000@gmail.com',
        age: 22,
        weight: 54.7,
        height: 1.65,
      });
      res.status(200).json(newStudent);
    } catch (e) {
      console.log(e);
      res.status(500).json({
        error: 'Invalid parameters',
      });
    }
  }
}

module.exports = new HomeController();
