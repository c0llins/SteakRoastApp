const express = require("express");

const Hamburger = require("../models/Hamburguer");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const hamburguer = await Hamburger.create(req.body);
    return res.send({ hamburguer });
  } catch (err) {
    return res.status(400).send({ error: "Registration Hamburguer Falid!" });
  }
});

router.get("/view", async (req, res) => {
  try {
    console.log(await Hamburger.find());
    return res.json(await Hamburger.find());
  } catch (err) {
    return res.status(400).send({ error: "Get Hamburguer Name Falid!" });
  }
});
router.get("/view/:name", async (req, res) => {
  try {
    console.log(await Hamburger.find({ name: req.params.name }));
    return res.json(await Hamburger.find({ name: req.params.name }));
  } catch (err) {
    return res.status(400).send({ error: "Get Hamburguer Falid!" });
  }
});

module.exports = app => app.use("/hamburguer", router);
