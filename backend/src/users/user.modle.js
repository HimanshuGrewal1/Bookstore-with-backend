const mongoose=require('mongoose')

const jwt = require("jsonwebtoken");


const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        required:true
    }


},
{
    timestamps:true
})

// userschema.pre("save",async function (next) {
//     if(!this.isModified("password")) return next();

//     this.password=await bcrypt.hash(this.password,10)
//     next()
// })

// userschema.methods.ispasswordcorrect=async function (password) {
//   return  await bcrypt.compare(password,this.password)
    
// }

// userschema.methods.generateAccesstoken= function () {
//    return jwt.sign(
//         {
//             _id:this._id,
//             email:this.email,
//             username:this.username,
//             fullname:this.fullname

//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         {
//             expiresIn:process.env.ACCESS_TOKEN_EXPIRY
//         }
//     )
      
//   }

//   userschema.methods.generateRefreshtoken= function () {
//     return jwt.sign(
//          {
//              _id:this._id,
//          },
//          process.env.REFRESH_TOKEN_SECRET,
//          {
//              expiresIn:process.env.REFRESH_TOKEN_EXPIRY
//          }
//      )
       
//    }

const User=mongoose.model('User',userschema)

module.exports=User;