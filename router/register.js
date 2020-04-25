const Express=require('express');
var controller=require('../controller/index');
var router=Express.Router();
var path=require('path');
 

router.get('/', function(req,res){

  //  res.sendFile(path.join(__dirname+'/view/index.html'));
    res.sendfile('/Users/meghrajdeshmukh/Desktop/WebDevelopment/SanketPro/DonateToCovid/view/index.html');

});
router.use('/registerUser',controller.register);

router.use('/login', controller.login);
router.use('/donatepage',function(req,res){


   console.log(req.cookies);
   res.cookie("user",req.cookies); 
  res.sendfile('/Users/meghrajdeshmukh/Desktop/WebDevelopment/SanketPro/DonateToCovid/view/donatepage.html');


})

router.use('/userlogin', function(req,res){

  res.sendfile('/Users/meghrajdeshmukh/Desktop/WebDevelopment/SanketPro/DonateToCovid/view/login.html');

});

router.use('/donatemoney', function(req, res){

  res.sendFile('/Users/meghrajdeshmukh/Desktop/WebDevelopment/SanketPro/DonateToCovid/view/donatemoney.html');

})

router.use('/paysucess', function(req, res){

  res.send("Thank you for payment");

})



router.use('/donatestuff', function(req,res){

    //console.log("req"+req.cookies);
    console.log("donate stuff");
    res.cookie("user",req.cookies);
    res.sendfile("/Users/meghrajdeshmukh/Desktop/WebDevelopment/SanketPro/DonateToCovid/view/donatestuff.html");

});

router.use('/addStuff',controller.addStuff);   



module.exports=router;