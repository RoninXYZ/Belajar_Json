fetch("https://reqres.in/api/users/1")
.then((data)=>data.json())
.then((json)=>console.log(json))