var site=require('./controllers/site');
var reg=require('./controllers/sign');

module.exports=function(app){
    app.get('/',site.index);
    
    app.get('/register',reg.showRegister);
    app.post('/register',reg.registerUser);
};