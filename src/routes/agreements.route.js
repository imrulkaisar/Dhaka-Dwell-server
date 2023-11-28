const express = require("express");
const router = express.Router();

// controllers
const {
  addAgreementRequest,
} = require("../controllers/agreements/addRequest.controller");
const {
  getAllAgreement,
} = require("../controllers/agreements/getAll.controller");
const {
  deleteAgreementById,
} = require("../controllers/agreements/delete.controller");
const {
  updateAgreementStatus,
} = require("../controllers/agreements/update.controller");

// Request agreement
router.post("/request", addAgreementRequest);
router.get("/get-all", getAllAgreement);
router.patch("/update/:id", updateAgreementStatus);
router.delete("/delete/:id", deleteAgreementById);

module.exports = router;
