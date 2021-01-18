const packJson = require("../../package.json");
const sequelize = require("../utils/database");

exports.getConfig = (req, res, next) => {
  return res.status(200).json({ packJson });
};

exports.getVersion = (req, res, next) => {
  return res.status(200).json({ "nps Backend": packJson.version });
};

exports.seq = async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize Connection established");
    res.stats(200).json("Sequelize Connection established");
    next();
  } catch (error) {
    next(error);
  }
};
