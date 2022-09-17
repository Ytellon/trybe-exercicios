const bodyParser = require('body-parser');
const patientsController = require('./controllers/patientsController');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/patients', patientsController.getAllPatients);

app.get('/surgeries', patientsController.getAllPatientSurgeries);

app.get('/plans/:id', patientsController.getAllPlans);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});