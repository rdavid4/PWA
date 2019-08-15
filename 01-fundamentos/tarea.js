// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.co/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/

// Resolución de la tarea #1
//  console.log('Ejercicio1');
//  fetch('https://swapi.co/api/people/1/')
//  .then( respuesta => {
//      return respuesta.json()
//  })
//  .then( json => {
//      console.log(json.name + ' ' + json.gender);
//  })
//  .catch( error => {
//      console.log('Error en la petición');
//  })

// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.co/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2
fetch('https://swapi.co/api/people/1/')
 .then( respuesta => {
     return respuesta.json()
 })
 .then( json => {
    //  console.log(json.name + ' ' + json.gender);
    let data = {nombre: 'Roger' , genero: json.gender}
     return fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
 })
 .then( data => data.json())
 .then( console.log )
 






