const express=require('express');
const Book = require('./bookmodle');
const { postabook, getallbook, getabook, updateabook, deleteabook } = require('./bookcontroller');
const verifyAdminToken = require('../middleware/verifyToken');
const  router = express.Router();

router.post("/create-book",verifyAdminToken,postabook)

router.get("/",getallbook)

router.get("/:id",getabook)

router.put("/edit/:id",verifyAdminToken,updateabook)

router.delete("/delete/:id",verifyAdminToken,deleteabook)

module.exports=router;