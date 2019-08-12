function sumarUno (numero, callback){
    //simular retardo
    setTimeout(function(){
        callback(numero + 1)
    }, 800)
}

sumarUno(2, function(nuevoValor){
    console.log(nuevoValor)
});