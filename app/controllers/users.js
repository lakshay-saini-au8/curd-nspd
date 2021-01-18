const User = require("../models/users");

exports.createOne = async (req, res, next) => {
  console.log("Create One: POST /users/");
  try {
    const USER_MODEL = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };
    try {
      const user = await User.create(USER_MODEL);
      console.log("OK create One User:", user);
      return res.status(201).json(user);
    } catch (error) {
      console.log("Error in create One User:", error);
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(400).json("Bad Request");
  }
};

exports.getAll = async (req, res, next) => {
  console.log("getAll: GET /users/");
  try {
    const ALL = await User.findAll();
    console.log(
      "OK getAll User:",
      All.map((el) => el.dataValues)
    );
    return res.status(200).json(ALL);
  } catch (error) {
    console.log("Error in getAll:", error);
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  console.log("getAll: GET /users/:id");
  try {
    const u = await User.findByPk(req.params.id);
    console.log("OK getAll User:", u.dataValues);
    return res.status(200).json(u);
  } catch (error) {
    console.log("Error in getAll:", error);
    return res.status(500).json(error);
  }
};
exports.updateOne = async (req, res, next) => {
  console.log("update One: PUT /users/:id");
  try {
    const USER_MODEL = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };
    try {
      const u = await User.update(USER_MODEL, {
        where: { id: req.params.id },
      });
      console.log("OK create One User:", u);
      return res.status(200).json(u);
    } catch (error) {
      console.log("Error in update One User:", error);
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(400).json("Bad Request");
  }
};

exports.deleteOne = async (req, res, next) => {
  console.log("Delete: DELETE /users/:id");
  try {
    const u = await User.destroy({
      where: { id: req.params.id },
    });
    console.log("OK deleted One User:", u);
    return res.status(200).json(u);
  } catch (error) {
    console.log("Error in Delete:", error);
    return res.status(500).json(error);
  }
};
