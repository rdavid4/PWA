
// //Peticion ajax 
// request.open('GET', 'https://reqres.in/api/users', true)
let usuario = {
    nombre: 'roger',
    edad: 32
}
fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify( usuario ),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then( resp => resp.json() )
.then( console.log )
.catch( error => {
    console.log("Error en la petición")
    console.log(error)
})