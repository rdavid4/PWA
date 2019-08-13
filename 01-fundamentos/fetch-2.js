
// //Peticion ajax 
// request.open('GET', 'https://reqres.in/api/users', true)
fetch('https://reqres.in/api/users').then( resp => resp.json()).then( respuesta =>{
    console.log(respuesta)
})