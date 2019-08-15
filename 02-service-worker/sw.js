// self.addEventListener('fetch', evento =>{
//     if(evento.request.url.includes('style.css')){
//         evento.respondWith(null)
//     }
//     evento.respondWith( fetch( evento.request ))
// })
self.addEventListener('fetch', evento =>{
    // console.log(evento.request.url.includes('jpg'));
    // let foto = fetch('https://picsum.photos/200/300')
    // if(evento.request.url.includes('jpg')){
    //     evento.respondWith(foto)
    // }
    //Responder un nuevo estilo
    // let respuesta = new Response('body{background-color:red}', { headers: { 'COntent-Type': 'text/css'}})
    // if(evento.request.url.includes('style.css')){
    //     evento.respondWith(respuesta)
    // }

    //Manejo de errores 404

    evento.respondWith( fetch( evento.request )
    .then( resp => {
        //objeto
        console.log(resp)
        if( resp.ok){
            return resp
        }else{
            if(resp.url.includes('.jpg')){
                return fetch('https://picsum.photos/200/300')
            }
        }
    }))
})