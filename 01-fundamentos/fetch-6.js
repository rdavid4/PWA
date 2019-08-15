fetch('./no-encontrado.html')
.then( resp => resp.text()).then( html => {
    console.log(html);
    var body = document.querySelector('body')
    body.innerHTML = html
})