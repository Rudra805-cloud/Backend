import mongoose from "moongose"

const productSchema =new mongoose.schema(
{
  discription:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
    //ye hum ese likhte hai ki images ko cloudenery me store kava diya aur vaha se link le liya 
  productImage:{
    type:String
  },
  price:{
    type:Number,
    default:0,
  },
  stoke:{
    type:Number,
    default:0,
  },
  category:{
   type:mongoose.Schema.Type.ObjectId,
   ref:"Category",
   required:true,
  },
  owner:{
    type:mongoose.Schema.Type.ObjectId,
    ref:"User",
    required:true,
  }
},
{timestamps:true,}

)
export const Product=mongoose.model("Product",productSchema)