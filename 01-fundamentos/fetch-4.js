
let imagen1 = document.getElementById('imagen1')
fetch('superman.png')
.then( resp => resp.blob() )
.then( imagen => {
    console.log(imagen);
    var pathImagen = URL.createObjectURL( imagen )
    console.log(pathImagen);
    imagen1.src = pathImagen
})