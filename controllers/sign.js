var check=require('validator').check,
    sanitize=require('validator').sanitize;

//加密
var crypto=require('crypto');
var settings=require('../settings');
var User=require('../proxy').User;

exports.showRegister=function(req,res){
    res.render('signup',{title:'注册新用户--替课吧'});
};

exports.registerUser=function(req,res,next){
    var name=sanitize(req.body.name).trim();
    //name=sanitize(name).xss();
    var loginname=name.toLowerCase();
    var pass=sanitize(req.body.pass).trim();
    //pass=sanitize(pass).xss();
    
    var email=sanitize(req.body.email).trim();
    email=email.toLowerCase();
    //email=sanitize(email).xss();
    
    var pass1=sanitize(req.body.pass1).trim();
    //pass1=sanitize(pass1).xss();
    
    //TODO: validator the number of phone
    var phone=sanitize(req.body.phone).trim();
    //phone=sanitize(phone).xss();
    
    if(name==''||pass==''||pass1==''||email==''){
        res.render('signup',{error:'信息不完整',name:name,email:email});
        return;
    }
    
    if(name.length<5){
        res.render('signup',{error:'用户名至少五个字符',name:name,email:email,});
        return;
    }
    try {
        check(name, '用户名只能使用0-9，a-z，A-Z。').isAlphanumeric();
      } catch (e) {
        res.render('signup', {error: e.message, name: name, email: email});
        return;
      }
    try{
        check(email,'不正确的电子邮箱').isEmail();
    }catch(e){
        res.render('signup', {error: e.message, name: name, email: email});
        return;
    }
    
    User.getUsersByQuery({'email': email}, {}, function (err, users) {
        if(err){
            return next(err);
        }
        if(users.length>0){
            res.render('signup', {error: '用户名或邮箱已被使用。', name: name, email: email});
            return;
        }
        
        pass=md5(pass);
        
        User.newAndSave(name,loginname,pass,email,phone,false,function(err){
            if(err){
                return next(err);
            }
            
            //TODO: success
            res.render('signup',{
            success:'欢迎加入'+settings.name+'!我们屠户不过给您的注册邮箱发了一封邮件，请点击里面的链接来激活账号！'
            });
        });
    });
}