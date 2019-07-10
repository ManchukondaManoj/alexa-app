
module.exports = function (postgresSequelize, DataTypes) {
  return postgresSequelize.define('alexa_student_marks', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MATHS: {
      type: DataTypes.INTEGER,
    },
    ENGLISH: {
      type: DataTypes.INTEGER,
    },
    SCIENCE: {
      type: DataTypes.INTEGER,
    },
    TOTAL: {
      type: DataTypes.INTEGER,
    },
    GRADE: {
      type: DataTypes.STRING,
    }
  },
    {
      tableName: 'alexa_student_marks',
      timestamps: false
    })
};
