/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasks', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: false
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      unique: false
    }
  }, {
    sequelize,
    tableName: 'tasks',
    timestamps: false
    });
};
