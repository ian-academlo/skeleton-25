require("dotenv").config();

module.exports = {
  development: {
    username: "iannacus",
    password: "root",
    database: "chat_db",
    port: 5432,
    host: "localhost",
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: "iannacus",
    password: "root",
    database: "chat_db",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
    dialectOptions: { ssl: { required: true, rejectUnauthorized: false } },
  },
};
