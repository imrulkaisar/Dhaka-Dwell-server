const createMember = require("./create.controller");
const getAllMembers = require("./getAll.controller");
const memberDetails = require("./member.controller");
const changeMemberRole = require("./changeRole.controller");
const deleteMember = require("./delete.controller");
const updateMember = require("./update.controller");
const isMemberExist = require("./isExist.controller");

module.exports = {
  createMember,
  getAllMembers,
  memberDetails,
  changeMemberRole,
  deleteMember,
  updateMember,
  isMemberExist,
};
