const express = require("express");
const bodyParser = require("body-parser");
const nameValidation = require("./middlewares/namevalidation");
const {
  infosValidation,
  saleDateValidation,
} = require("./middlewares/infosValidation");
const warrantyPeriod = require("./middlewares/warrantyPeriod");

const app = express();
app.use(bodyParser.json());

app.post(
  "/sales",
  nameValidation,
  infosValidation,
  saleDateValidation,
  warrantyPeriod,
  (req, res) => {
    return res.status(201).json({
      message: "Sales created",
    });
  }
);

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
