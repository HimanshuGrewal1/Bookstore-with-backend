const express=require('express');
const Book = require('./bookmodle');
const { postabook, getallbook, getabook, updateabook, deleteabook } = require('./bookcontroller');
const  router = express.Router();

router.post("/create-book",postabook)

router.get("/",getallbook)

router.get("/:id",getabook)

router.put("/edit/:id",updateabook)

router.delete("/delete/:id",deleteabook)

module.exports=router;