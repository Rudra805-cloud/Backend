import mongoose from "mongoose"

//oder ki quinty and kosa item hai uske liye unique schema banaya hai 
const orderItemSchema=new mongoose.Schema(
{
prodectId:{
  type:mongoose.Schema.Type.ObjectId,
  ref:"Product"
},
quantity:{
  type:Number,
  required:true,
}
}
)
const orderSchema=new mongoose.Schema(
  {
    orderPrice:{
      type:Number,
      required:true
    },
    customer:{
    type:mongoose.Schema.Type.ObjectId,
    ref:"User",
    },
    orderItem:{
      type:[orderItemSchema]
    },
    address:{
      type:String,
      required:true,
    },
    //jab fix option ho 
    status:{
      type:String,
      enum:["PENDING","CANCELLED","DELIVERD"],
      default:"PENDING"
    }

  },
  {timestamps:true})
  export const Order=mongoose.model("Order",orderSchema)