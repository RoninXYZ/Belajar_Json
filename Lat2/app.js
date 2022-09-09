const api_url = "https://reqres.in/api/users?page=2";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    
    let tab = 
        `<tr>
          <th>id</th>
          <th>email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>gambar</th>
         </tr>`;
    
    //Loop to access all rows 
    for (let r of data.data) {
        tab += `<tr> 
    <td>${r.id} </td>
     <td>${r.email}</td>
     <td>${r.first_name}</td> 
     <td>${r.last_name}</td> 
     <td><img src="${r.avatar}" ></img> </td>        
</tr>`;
    }
    //    for(let r in data.data ){
    //     tab += `<tr> 
    //         <td>${r.id} </td>
    //          <td>${r.email}</td>
    //          <td>${r.first_name}</td> 
    //          <td>${r.last_name}</td> 
    //          <td><img src="${r.avatar}" ></img> </td>        
    //     </tr>`;



    //    }

    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}