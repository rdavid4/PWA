function sumarUno (numero){
    //Promesa
    var promesa = new Promise (function(resolve, reject){
        //simular retardo
        if(numero >=7){
            reject('El numero es muy alto')
        }
        setTimeout(function(){
            resolve(numero + 1)
        }, 800);
        
    })

    return promesa

}
sumarUno(7)
.then(nuevoNumero => {
    console.log(nuevoNumero)
})
.catch( error => {
    console.log(error)
})
// .then(sumarUno)
// .then( nuevoNumero => {
//     console.log("nuevoNumero3", nuevoNumero)
// })
