
// Ciclo de vida del SW

//Instalacion de SW
self.addEventListener('install', event => {
    // Descargar Assets
    // Creamos un cache
    console.log('Instalando SW')
    const instalacion = new Promise( (resolve, reject) =>{
        //activar nuevo SW
        self.skipWaiting()
        console.log('Instalación terminada')
        resolve()
    })

    event.waitUntil(instalacion)
   

})


//Activacion de SW
self.addEventListener('activate', event => {
    //Borrar cache viejo
    console.log('SW activo y listo');
})

//Evento Sync cuando recuperamos la conexion a internet
self.addEventListener('sync', event => {
    console.log('Volvemos a tener conexión')
    console.log(event)
    console.log(event.tag)
})

//PUSH: Manejar push notifications
self.addEventListener('push', event => {
    console.log('Notificacion recibida')
})
