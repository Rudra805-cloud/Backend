import mongoose from "mongoose"

const doctorSchema=new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    salary:{
      type:Number,
      required:true,
    },
    Qualification:{
      type:String,
      required:true,
    },
    expirenceInyear:{
      type:Number,
      default:0
    },
    workInhospital:[
      {
        type:mongoose.Schema.Type.ObjectId,
        ref:"Hospital"
      }
    ]
  },
  {timestamps:true}
  )

export const Doctor=mongoose.model("Doctor",doctorSchema)
