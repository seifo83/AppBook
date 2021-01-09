var express = require("express");
var router = express.Router();




router.get('/', function( req, res ){
    console.log('page d\'accueil demandée');
    console.log(req.path);
    res.end("page d'accueil");
});

router.get('/test', function( req, res ){
    console.log('demande recue avec la méthode Get sur l\'URL  /test');
    console.log(req.path);
    res.end("page test méthode GET ");
});

router.post('/test', function( req, res ){
    console.log('demande recue avec la méthode post sur l\'URL  /test');
    console.log(req.path);
    res.end("page test méthode POST");
});





//Gestion Error 

router.use((req, res, suite)=> {
    const error = new Error("Page non trouvé");
    error.status = 404;
    suite(error);
});

router.use((error, req, res)=> {
    res.status(errors.status  || 500);
    res.end(error.message);
})




module.exports = router



