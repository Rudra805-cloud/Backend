import mongoose from "mongoose"
//Schema ek method hai jo ek obeject leta hai 
// const userSchema=new mongoose.Schema({})

const userSchema=new mongoose.Schema(
  //object-1 kya kya deta liya 
  {
    username:{
      type:String,
      required:true,   //required true means ye field hona hi chaiye 
      unique:true,    //name agar unique rakhana hai like instagram
      lowercase:true,
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
    },
    password:{
      type:String,
      required:true,
    }

  },
  //object-2 time kab create kiya aur kab update kiya
  {timestamps:true}           //created at and updated at ka time 
  )
//schema banane ek liye export karna jaruri hai
export  const User=mongoose.model("User",userSchema)           
 //=>model do perameter leta hai kya model and kiske basis pe naya model banau                             


 //interview q 
 //model("User",userSchema) yaha pe jab mongodb me store hoga to User=>users me convert ho jata hai{model pural me convert ho jata hai aur har koi lowercase me ho jata hai}
