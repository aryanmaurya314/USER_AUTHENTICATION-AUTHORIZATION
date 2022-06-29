const { registerUser, loginUser } = require("../controllers/authController");
const { isValidUser } = require("../middlewares/authMiddleware");


// create router  //
const router = require("express").Router();

// ############################### AUTH ROUTES ################################# //
// route for register user //
router.post("/register", registerUser);

// route for login user //
router.post("/login", [isValidUser], loginUser);




module.exports = router;