'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teamyusuf = sequelize.define('Teamyusuf', {
    name: DataTypes.STRING
  });

  Teamyusuf.associate = function (models) {
    models.Teamyusuf.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Teamyusuf;
};
