const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));

require("./routes/SignUpRoute")(app);
require("./routes/LoginRoute")(app);
require("./routes/AskQRoute")(app);
require("./routes/QPerPeriodRoute")(app);
require("./routes/SearchQRoute")(app);
require("./routes/QPerKeywordRoute")(app);
require("./routes/SelectQRoute")(app);
require("./routes/AnsQRoute")(app);

module.exports = app