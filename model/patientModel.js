
const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema(
    {
        Name: String,
        Phone: String,
        Address:String,
        Symptoms:String,
        Status:String
    }
)

module.exports=mongoose.model("patient",patientSchema)