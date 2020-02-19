const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser());
app.get("/HomeLoandata", (req, res) => {
  res.json({
    module: "user-registration",
    ui_definition: {
      mandatory_fields: ["name", "type", "first_home_buyer"],
      user_types: [
        {
          key: 0,
          value: "Select one"
        },
        {
          key: 1,
          value: "Group 1"
        },
        {
          key: 2,
          value: "Group 2"
        }
      ]
    }
  });
});

app.post("/user", (req, res) => {
  res.json({
    success: true
  });
});

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
