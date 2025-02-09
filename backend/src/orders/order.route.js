const express=require('express');
const { createOrder, getOrder } = require('./order.controller');

const router=express.Router();

router.post("/",createOrder)

router.get("/email/:email",getOrder)

module.exports=router;