'use strict';
const bcrypt = require('bcrypt')

function hash(user, options) {
  const saltRounds = 10;
  return bcrypt.genSalt(saltRounds)
      .then(salt => bcrypt.hash(user.password, salt, null))
      .then(hash => {
        user.setDataValue('password', hash)
      })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    },
    created: {
      type: 'TIMESTAMP',
      allowNull: false,
      field: 'created',
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated',
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    hooks: {
      beforeCreate: hash,
      beforeUpdate: hash
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};