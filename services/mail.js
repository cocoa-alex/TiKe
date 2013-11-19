var mailer=require('nodemailer');
var settings=require('../settings');

var transport=mailer.createTransport('SMTP',settings.mail_opts);

var SITE_ROOT_URL='http://'+settings.hostname+(settings.port!=80?':'+settings.port:'');

var sendMail=function(data){
    if(settings.debug){
        for(var k in data){
            console.log('%s: %s',k,data[k]);
        }
        return;
    }
    
    transport.sendMail(data,function(err){
        if(err){
            console.log(err);
        }
    });
};

/***
*发送激活邮件
*@param  who 接收人的邮件地质
*@param  token 重置用的token字符串
*@param  name  接收人用户名
*@parma  email 接受人的邮件地址
***/

exports.sendActiveMail=function(who,token,name){
    var from=settings.mail_opts.auth.user;
    var to=who;
    var subject=settings.name+'-----激活帐号------';
    var html='<p>您好:</p>'+
        '<p>我们受到您在'+'<strong>'+settings.name+'</strong>社区d注册信息，请点击下面的连接来激活帐户:</p>'+
        '<a href="'+SITE_ROOT_URL+'/active_account?key='+token+'&name='+name+'">>>激活连接<<</a>'+
        '<p>若您没有在' + config.name + '社区填写过注册信息，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>' +
        '<p>' + settings.name + '社区 谨上。</p>';
    
    sendMail({
        from:from,
        to:to,
        subject:subject,
        html:html
    });
};