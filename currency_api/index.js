const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

const routes = require("./src/routes/v1");

app.use(express.json());

app.use("/v1", routes);

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
