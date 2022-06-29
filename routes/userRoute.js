const { updateUser, deleteUser, getUser, getAllUsers } = require("../controllers/userController");
const { isOwnerOrAdmin, isUserAdmin, isUser_idValid } = require("../middlewares/authMiddleware");



// create router  //
const router = require("express").Router();

// ################################ USER ROUTES ################################## //
// route to update user datails //
router.put("/:id", [isOwnerOrAdmin, isUser_idValid], updateUser);

// route to delete user //
router.delete("/:id", [isUserAdmin, isUser_idValid], deleteUser);

// route to user datails //
router.get("/find/:id", [isUserAdmin, isUser_idValid], getUser);

// route to all users datails //
/*  querry search :
 *          /?new=true    -->> gives 5 latest users
 *  filtered search :
 *          "name":"Arya"   -->> gives all the users with matching names.
 *          "city":"delhi"   -->> gives all the users with matching city.
*/
router.get("/", [isUserAdmin], getAllUsers);


module.exports = router;