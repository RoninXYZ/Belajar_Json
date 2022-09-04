// const mhs = {
//     nama: "Sandika Galih",
//     nrp : "34054677878",
//     email: "sandika@gmail.com"
// }

// console.log(JSON.stringify(mhs))


let Xhr = new XMLHttpRequest();
Xhr.onreadystatechange = function () {
    if(Xhr.readyState == 4 && Xhr.status == 200){
        let MHS = JSON.parse(this.responseText);
        console.log(MHS);
    }
}

Xhr.open('GET' , 'coba1.json', true);
Xhr.send();