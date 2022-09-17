const { Plans, Patients, Surgeries } = require("../models");

const patientsController = {
  getAllPatients: async (req, res) => {
    const patients = await Patients.findAll({
      include: { model: Plans, as: "plans" },
    });
    if (!patients) {
      return res.status(404).send("No patients found");
    }
    return res.status(200).send(patients);
  },

  getAllPatientSurgeries: async (req, res) => {
    const patients = await Patients.findAll({
        include: { model: Surgeries, as: "surgeries", through: { attributes: [] } },
    })
    if (!patients) {
        return res.status(404).send("No patients found");
    }
    return res.status(200).send(patients);
  },
  
  getAllPlans: async (req, res) => {
    const { id } = req.params;
    const plans = await Plans.findAll({
        where: { plan_id: id },
        include: { model: Patients, as: "patients" },
    });
    if (!plans || plans.length === 0) {
        return res.status(404).send("No plans found");
    }
    return res.status(200).send(plans);
  }
};

module.exports = patientsController;
