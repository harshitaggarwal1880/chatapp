const { addmsg, getallmsg } = require("../controllers/messagesController");

const router = require("express").Router()

router.post("/addmsg", addmsg);

router.post("/getallmsg", getallmsg);

module.exports = router;