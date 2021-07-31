const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));

require("./routes/LoginRoute")(app);
/*
require("./routes/SignUpRoute")(app);
require("./routes/AskQRoute")(app);
require("./routes/QPerPeriodRoute")(app);
require("./routes/SearchQRoute")(app);
require("./routes/QPerKeywordRoute")(app);
require("./routes/SelectQRoute")(app);
require("./routes/AnsQRoute")(app);
require("./routes/MyContributionRoutes/MyContributionQRoute")(app);
require("./routes/MyContributionRoutes/MyContributionAnsRoute")(app);
require("./routes/MyContributionRoutes/MyContributionQMetricsRoute")(app);
require("./routes/MyContributionRoutes/MyContributionAnsMetricsRoute")(app);
*/

module.exports = app