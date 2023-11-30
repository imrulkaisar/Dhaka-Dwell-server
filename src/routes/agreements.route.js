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

// middlewares
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");
const {
  agreementByFilter,
} = require("../controllers/agreements/agreementByFilter.controller");

// Request agreement
router.post("/request", verifyToken, addAgreementRequest);
router.get("/get-all", getAllAgreement);
router.patch("/update/:id", verifyToken, verifyAdmin, updateAgreementStatus);
router.delete("/delete/:id", verifyToken, verifyAdmin, deleteAgreementById);
router.get("/get-agreement/", verifyToken, agreementByFilter);

module.exports = router;
