var path =require ('path');

module.exports.index = function(req,res){
    res.render('index')
}
module.exports.login = function(req,res){
    res.render('login')
}

module.exports.signin = function(req,res){
    res.render('signin');
}