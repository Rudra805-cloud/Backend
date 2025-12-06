import mongoose from "mongoose"

const patientSchema=new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
    },
    //medical preoblem kya hai diagnosed 
    diagnosedWith:{
      type:String,
      required:true,
    },
    address:{
      type:String,
      required:true,
    },
    age:{
      type:Number,
      required:true,
    },
    bloodGroup:{
      type:String,
      required:true,
    },
    gender:{
      type:String,
      enum:["M","F","O"],
      required:true,
    },
    addmitedIn:{
      type:mongoose.Schema.Type.ObjectId,
      ref:"Hospital"
    },



  },
  {timestamps:true}
  )

export const Patient=mongoose.model("Patient",patientSchema)
