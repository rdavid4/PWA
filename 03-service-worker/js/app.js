

// Detectar si podemos usar Service Workers
// Descarga
// Instala
// Activa
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js').then( reg => {
        
        //Notificaciones permisos
        Notification.requestPermission().then( result => {
            console.log(result)
            reg.showNotification('Hola mundo notification')
        })

    })
}

//Validacion del metodo sync de SW
//...
