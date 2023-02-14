const logger = require("./winston-logger");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function getRandoms(req, res){
    logger.log("info", "/api/randoms  -  GET")   
    //cantidad de números aleatorios en el rango del 1 al 1000 especificada por parámetros de consulta (query).
    //Por ej: /api/randoms?cant=20000.
    let cantNumeros = req.query.cant;
    cantNumeros ? cantNumeros = cantNumeros : cantNumeros = 100000;

    const arrRandoms = [];
    for (let i = 0; i < cantNumeros; i++) {
        arrRandoms.push(getRandomInt(1, 1000));
    }

    const objResultado = {};
    arrRandoms.forEach(function(numero){
        objResultado[numero] = (objResultado[numero] || 0) + 1;
      }); 
        
        res.send( {objResultado} )
}
    
    module.exports = {
        getRandoms
    }