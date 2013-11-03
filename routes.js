var site=require('./controllers/site');
var reg=require('./controllers/register');

module.exports=function(app){
    app.get('/',site.index);
    
    app.get('/register',reg.register);
};