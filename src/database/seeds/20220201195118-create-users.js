const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'John Doe',
          email: 'john.doe@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Philip Banks',
          email: 'unclephill12@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Miguel da Silva',
          email: 'miguelitos__@gmail.com.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Carla France',
          email: 'french.enjoyer119@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Grug Momen\'t',
          email: 'guy@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Fredrik Fitzgerald Fazbear',
          email: 'jollygoodshow@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Chica Chestershire',
          email: 'breachgood@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {}, //eslint-disable-line
};
