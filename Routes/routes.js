const express = require("express");
const router = express.Router();
const { setUser,getUser, getUserById,putUsers,deleteUsers,getAllUsers,setBankDetails,setDesignation} = require("../Controller/userController/userController");

router.route("/sign-up").post(setUser);
router.route("/sign-in").post(getUser);
router.route("/getall-users").get(getAllUsers);
router.route("/:id").get(getUserById).put(putUsers).delete(deleteUsers);

//bank details:
router.route("/:id/add-bank-detail").put(setBankDetails);
//add designation:
router.route("/:id/add-designation").put(setDesignation);
module.exports = router;