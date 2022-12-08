const express=require('express')
const router=express.Router()
const controller=require('./controller')

router.get("/assets-api",controller.getcoindetails)



module.exports=router
