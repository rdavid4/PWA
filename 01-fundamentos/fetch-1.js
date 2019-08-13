var request = new XMLHttpRequest()
//Peticion ajax 
request.open('GET', 'https://reqres.in/api/users', true)
//Enviar argumentos
request.send(null)
//Estado de la peticion
request.onreadystatechange = function(state){
 if(request.readyState === 4){
     var respuesta = request.response
     //parsear respuesta
     var respuestaObj = JSON.parse(respuesta)
     console.log(respuestaObj);
 }
}