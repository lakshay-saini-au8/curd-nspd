const express = require("express");

const sequelize = require("./utils/database"); // database initializations
const User = require("./models/users");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Routes
app.use("/dev", require("./routes/dev"));
app.use("/users", require("./routes/users"));

(async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(process.env.EXTERNAL_PORT);
  } catch (error) {
    console.log(error);
  }
})();
