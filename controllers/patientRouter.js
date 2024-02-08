const express=require("express")
const patientModel=require("../model/patientModel")
const router=express.Router()
//separate page  to  call api 
router.post("/add",async(req,res)=>{
    let data=req.body
    let patient=new patientModel(data)
    let result=await patient.save()
    res.json(
        {
            status:"success"
        }
    )
})

module.exports=router
