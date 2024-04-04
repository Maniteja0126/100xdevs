const express = require("express");
const cors = require('cors')
const rootRouter = require('./Routes/index');
const bodyParser = require("body-parser");
const app = express();

app.use(cors())
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use("/api/v1" , rootRouter)


app.listen(3000)