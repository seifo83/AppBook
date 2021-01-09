var  express = require("express");
var server = express();
var morgan = require("morgan");



server.use(morgan("dev"));

// Configurer Route

server.get('/', function( req, res ){
    console.log('page d\'accueil demandée');
    console.log(req.path);
    res.end("page d'accueil");
});

server.get('/test', function( req, res ){
    console.log('demande recue avec la méthode Get sur l\'URL  /test');
    console.log(req.path);
    res.end("Bonjour Client");
});


 



// launch server

server.listen(3000, function(){
    console.log('server en écoute :)');
});
