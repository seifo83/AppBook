var express = require("express");
var router = express.Router();
const twig = require("twig");




router.get('/', function( requete, response  ){
    console.log('page d\'accueil demandée');
    console.log(requete.path);
    response.render("accueil.html.twig");
});

router.get('/test', function( requete, response ){
    console.log('demande recue avec la méthode Get sur l\'URL  /test');
    console.log(requete.path);
    response.end("page test méthode GET ");
});

router.post('/test', function( requete, response ){
    console.log('demande recue avec la méthode post sur l\'URL  /test');
    console.log(requete.path);
    response.end("page test méthode POST");
});


// Route Listant les livres
router.get("/livres", (requete, response) => {
    response.render("livres/liste.html.twig");

})

//Route afficher un livre 
router.get("/livres/:nom", (requete, response) => {
    //console.log(requete.params.nom);
    response.render("livres/livre.html.twig", {nom:requete.params.nom});


})


//Gestion Error 

router.use((requete, response, suite)=> {
    const error = new Error("Page non trouvé");
    error.status = 404;
    suite(error);
});

router.use((error, requete, response)=> {
    response.status(errors.status  || 500);
    response.end(error.message);
})


module.exports = router



