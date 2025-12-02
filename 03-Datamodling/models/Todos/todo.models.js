import mongoose from "mongoose"

const todoSchema=new mongoose.Schema(
{
content:{
  type:String,
  required:true, 
},
complete:{
  type:Boolean,
  default:false
},
//imp
createdBy:{
   type=mongoose.Schema.Types.ObjectId,
  ref:"User"
},
subtodo:[
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Subtodo"

  }
] //Array if subtodo
},
{timestamps:true}
)

export const Todo=mongoose.model("Todo",todoSchema);