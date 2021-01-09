var  express = require("express");
var server = express();
var morgan = require("morgan");
var router = require("./routeur");


//CSS personalisé 
server.use(express.static("public"));
//Morgan
server.use(morgan("dev"));
// Configurer Route
server.use("/", router);







// launch server

server.listen(3000, function(){
    console.log('server en écoute :)');
});
