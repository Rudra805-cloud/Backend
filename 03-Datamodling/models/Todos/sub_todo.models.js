import { Timestamp } from "bson"
import mongooes from "mongoose"

const subtodoSchema=new mongooes.Schema(
  {
    content:{
      type:String,
      required:true,
    },
    complete:{
      type:Boolean,
      default:false,
    },
    createdBy:{
      type:mongooes.Schema.Types.ObjectId,
      ref:"User",
    }
    
  },
  {Timestamps:true})


export const Subtodo=mongooes.model("Subtodo",subtodoSchema)






