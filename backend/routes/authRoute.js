const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.get("/signout", authController.signOut);
router.post("/google", authController.google);

module.exports = router;
