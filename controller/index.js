const user=require('../model/user');
var stuff=require('../model/stuff');

module.exports.register=function(req, res)
{

    console.log("on the page of registration");
    console.log(req.body);

    user.create({
   
        name:req.body.uname,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.pswd



    }, function(error, user){

        if(error)
        {
            console.log("cannot create user"+error);
            res.send(error);

        }else{

            console.log(user+"Created");
            res.redirect('/userlogin');

        }

    })
     //res.send("error");
       


}

module.exports.login=function(req,res)
{



    user.find(email=req.body.email, function(err, user){

          if(err)
          {
              res.send(err);

          }
          console.log(user);

          if(user.password==req.body.password)
          {
              res.cookie("user",user); 
              res.redirect('/donatepage');

          }else{
              res.send("password doesnt match");
          
            }


    })




}

module.exports.addStuff=function(req,res){

    console.log(req.body);
     var user=req.cookies;
     
     console.log(user.user.user.user.user[0]);
  var id=user.user.user.user.user[0];

    stuff.create({

        stuff:req.body.stuff,
        location:req.body.pick,
        phone:req.body.phone,
        date:req.body.date,
        User_id:id,

 
        
    }, function(err, user){

        console.log(user);
        if(err)
        return res.send(err);

        return res.send("thank you for giving stuff");


    });



}