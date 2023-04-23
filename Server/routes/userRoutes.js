const { register, login, setavatar, allusers } = require("../controllers/usersController")

const router = require("express").Router()

router.post("/register", register);

router.post("/login", login);

router.post("/setavatar/:id", setavatar);

router.get("/allusers/:id", allusers);



module.exports = router;