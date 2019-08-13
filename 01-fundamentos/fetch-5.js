fetch('https://reqres.in/api/users/1')
.then( resp => resp.json())
.then( data => {
    console.log(data);
})