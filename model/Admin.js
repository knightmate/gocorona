
const mongoose=require('mongoose');



//const schema={name:{type:String}}
const adminSchema=mongoose.Schema({
 
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
 

const Admin=mongoose.model('Admin',adminSchema);
module.exports=Admin;