const express = require("express");
const formRoute = require("./user.route");

const router = express.Router();

router.use("/form", formRoute);

module.exports = router;
