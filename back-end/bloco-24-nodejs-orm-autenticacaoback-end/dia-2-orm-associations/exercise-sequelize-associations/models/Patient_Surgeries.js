module.exports = (sequelize, DataTypes) => {
  const PatienteSurgeries = sequelize.define(
    "Patient_surgeries",
    {},
    {
      timestamps: false,
    }
  );
  PatienteSurgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
        as: 'patients',
        through: PatienteSurgeries,
        foreignKey: 'surgery_id',
        otherKey: 'patient_id',
    });
    models.Patients.belongsToMany(models.Surgeries, {
        as: 'surgeries',
        through: PatienteSurgeries,
        foreignKey: 'patient_id',
        otherKey: 'surgery_id',
    });
  }
    return PatienteSurgeries;
};
