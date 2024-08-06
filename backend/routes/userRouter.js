const express = require("express");
const userController = require("../controllers/userController");
const { verifyToken } = require("../utils/verifyuser");

const router = express.Router();

router.put("/update/:id", verifyToken, userController.updateUser);
router.delete("/delete/:id", verifyToken, userController.deleteUser);
router.get("/listings/:id", verifyToken, userController.getUserListing);
router.get("/:id", verifyToken, userController.getUser);

module.exports = router;
