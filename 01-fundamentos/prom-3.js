function sumarLento (numero) {

        var promesa = new Promise( function (resolve, reject) {
            setTimeout(function(){
                resolve(numero + 1)
            }, 800)
        })

        return promesa

}

let sumarRapido = (numero) => {
    return new Promise( (resolve, reject) => { 
        setTimeout( () => resolve (numero + 1), 300 )
    })
}

// sumarLento(5).then(console.log)
// sumarRapido(10).then(console.log)

Promise
.all([sumarRapido(10), sumarLento(20)])
.then(respuestas=>{
    console.log(respuestas)
})