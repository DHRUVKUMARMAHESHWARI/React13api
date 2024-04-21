const express = require('express');
const router = express.Router();
/**
 * @router
 * @access public
 * @method  GET
 */

const { home, register, readall } = require("../controllers/indexController");

router.get("/", home);

router.get("/register", register);

router.get("/readall", readall);



module.exports = router;