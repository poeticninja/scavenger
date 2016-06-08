import Sequelize from "sequelize";

const register = (server, options, next) => {

  const sequelize = server.plugins["db"].sequelize;

  const User = sequelize.define('user', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUID,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    locked: {
      type: Sequelize.BOOLEAN
    },
    lastLogin: {
      type: Sequelize.DATE,
      field: 'last_login'
    },
    lastUpdatedBy: {
      type: Sequelize.DATE,
      field: 'last_updated_by'
    },
    lastUpdated: {
      type: Sequelize.DATE,
      field: 'last_updated'
    },
    createdDate: {
      type: Sequelize.DATE,
      field: 'created_date'
    },
    createdBy: {
      type: Sequelize.STRING,
      field: 'created_by'
    },
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });

  User.sync({force: true}).then(function () {
    // Table created
    /* Could create test user here
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
    */

    server.expose("User", User);
    return next();
  });

};

register.attributes = {
  name: 'model'
};

export default register;
