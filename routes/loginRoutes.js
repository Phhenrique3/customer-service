// routes/login.js
const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.post("/api", loginController.login);

module.exports = router;
