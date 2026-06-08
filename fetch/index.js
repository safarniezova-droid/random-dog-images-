// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {

//         let usersDiv = document.getElementById("users");

//         data.forEach((user) => {

//             usersDiv.innerHTML += `
//                 <div style="border:1px solid black;
//                 margin:10px; padding:10px;">
//                     <h2>${user.name}</h2>
//                     <p>${user.email}</p>
//                     <p>${user.phone}</p>
//                 </div>
//             `;
//         });
//     });

const url = 'https://dog.ceo/api/breeds/image/random'

const gallery = document.getElementById('gallery');

const button = document.getElementById('Clic');

function render(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let rasm = data.message;

        gallery.innerHTML = `
            <img src="${rasm}" alt="">
        `
    })
}

render()

button.onclick = function(){
    render();
}
