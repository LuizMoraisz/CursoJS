const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Morais",
          email: "morais1@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Morais2",
          email: "morais2@gmail.com",
          password_hash: await bcryptjs.hash("654321", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Morais3",
          email: "morais3@gmail.com",
          password_hash: await bcryptjs.hash("1238192387", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
