const express = require("express");
const router = express.Router();
const Hamburguer = require("../models/Hamburguer");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + " - " + file.originalname);
  }
});
const upload = multer({ storage });

router.post("/photo", upload.single("img"), function(req, res) {
  const hamburguer = await Hamburguer.create(req.body);
  return res.send(req.file);
});

module.exports = app => app.use("/upload", router);
