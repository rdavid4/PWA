
// if( 'serviceWorker' in navigator){
//     console.log('Service Worker compatible');
// }

if( navigator.serviceWorker ){
    navigator.serviceWorker.register('/sw.js')
}