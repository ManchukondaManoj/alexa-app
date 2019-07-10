
module.exports = function (postgresSequelize, DataTypes) {
  return postgresSequelize.define('alexa_devices', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    student_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alexa_device_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      tableName: 'alexa_devices',
      timestamps: false
    })
};
