
const mongoose=require('mongoose');



//const schema={name:{type:String}}
const stuffSchema=mongoose.Schema({
 
    stuff:{
        
        type:String,
        require:true,


    },
      location:{
         type:String,
         require:true,
     },

     phone:{
        type:String,
        require:true,
        unique:true,
    },

    date:{
        type:Date,
        

    },
    User_id: 
        { 
            type: mongoose.Schema.ObjectId, 
            ref: 'User',
            require:true,
        
        }
      
    
});
 

const Stuff=mongoose.model('Stuff',stuffSchema);
module.exports=Stuff;