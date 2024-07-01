const express = require("express");
const router = express.Router();
const { createUser, userLogin } = require("../controllers/userControllers");
router.get("/login", userLogin);

router.post("/create", createUser);
module.exports = router;
