/*
 * GET home page.
 */
var settings=require('../settings');
exports.index = function(req, res){
  res.render('index', { title:settings.name,error:'错五'});
};