const express = require("express");
const router = express.Router();

// controllers
const { createMember } = require("../controllers/members/create.controller");
const { getAllMembers } = require("../controllers/members/getAll.controller");
const { memberDetails } = require("../controllers/members/member.controller");
const {
  changeMemberRole,
} = require("../controllers/members/changeRole.controller");
const { deleteMember } = require("../controllers/members/delete.controller");
const { updateMember } = require("../controllers/members/update.controller");
const { isMemberExist } = require("../controllers/members/isExist.controller");

// middlewares
// const verifyToken = require("../middlewares/verifyToken");

// GET all members
router.get("/get-all", getAllMembers);

// GET member details
router.get("/member", memberDetails);

// GET whether a member with a given email exists
router.get("/is-exists", isMemberExist);

// POST create a new member
router.post("/create", createMember);

// PATCH update an existing member
router.patch("/update", updateMember);

// PATCH change the role of an existing member
router.patch("/change-role", changeMemberRole);

// DELETE delete an existing member
router.delete("/delete", deleteMember);

module.exports = router;
