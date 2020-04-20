const user=require('../model/user');

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
              res.redirect('/donatepage');
          }else{
              res.send("password doesnt match");
          
            }


    })




}