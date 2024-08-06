const express = require("express");
const listingController = require("../controllers/listingController");
const { verifyToken } = require("../utils/verifyuser");

const router = express.Router();

router.post("/create", verifyToken, listingController.createListing);
router.delete("/delete/:id", verifyToken, listingController.deleteListing);
router.put("/update/:id", verifyToken, listingController.updateListing);
router.get("/get/:id", listingController.getListing);
router.get("/get", listingController.getListings);

module.exports = router;
