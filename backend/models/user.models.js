import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
username : {
    type :String,
},
email : {
    type : String,
    required :true,
    unique: true,
},
password :{
    type : String,
    required : [true,]
},
list :[{
     type : mongoose.Schema.Types.ObjectId,
     ref : "List"
}]
}, {timestamps : true }
)

export const User = mongoose.model("User", userSchema)