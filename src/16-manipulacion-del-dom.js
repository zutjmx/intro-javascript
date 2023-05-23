//Uso de Fetch

//Ejecución de la promesa de fetch, otra forma
/* httpClient
    .then(respuesta => respuesta.json())
    .then(data => console.log(data)); */

//Usando async y await.
// const getUsuarios = async () => {
//     const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
//     return await respuesta.json();
// }

// const usuarios = await getUsuarios();
// console.log('Usuarios: ', usuarios);

const getUsuarios = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json();
    const ul = document.createElement('ul');

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.innerText = usuario.name;
        ul.append(li);
        console.log(usuario.name);
    });

    document.getElementById('root').append(ul);

}

getUsuarios();

console.log('Esto se ejecuta antes que getUsuarios() ');
