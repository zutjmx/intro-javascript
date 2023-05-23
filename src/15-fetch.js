//Uso de Fetch

const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

//Ejecución de la promesa de fetch
/* httpClient.then(respuesta => {
    respuesta.json().then(data => {
        console.log(data);
    });
}); */

//Ejecución de la promesa de fetch, otra forma
httpClient
    .then(respuesta => respuesta.json())
    .then(data => console.log(data));

console.log('Esto se muestra antes que la promesa.');
