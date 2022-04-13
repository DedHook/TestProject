const express = require("express");

const {
  registerView,
  loginView,
  registerUser,
  loginUser,
} = require("../controllers/loginController");
const { dashboardView , blockuser ,deleteuser,unblockuser} = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

const router = express.Router();

router.get("/register", registerView);
router.get("/login", loginView);

router.get("/dashboard", protectRoute, dashboardView);
router.post("/dashboard/block/:id", blockuser);
router.post("/dashboard/del/:id", deleteuser);
router.post("/dashboard/unblcok/:id", unblockuser);


router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;