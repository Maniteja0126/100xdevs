const express = require("express");
const cors = require("cors");
const rootRouter = require("./Routes/index");
const app = express();

app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies

app.use("/api/v1", rootRouter);

app.listen(3000);
