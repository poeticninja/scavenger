import Sequelize from "sequelize";

const register = (server, options, next) => {

  const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    // SQLite only
    storage: './database.sqlite'
  });

  server.expose("sequelize", sequelize);

  return next();
};

register.attributes = {
  name: 'db'
};

export default register;
