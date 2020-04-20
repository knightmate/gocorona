
const mongoose=require('mongoose');



//const schema={name:{type:String}}
const userSchema=mongoose.Schema({
 
     name:{
         type:String,
         require:true,
     },

     email:{
        type:String,
        require:true,
        unique:true,
    },

    phone:{
        type:String,
        

    },
    password:{
        type:String,
        require:true,

    }
    
});
 

const User=mongoose.model('User',userSchema);
module.exports=User;