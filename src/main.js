//Faker para simular datos
import { faker } from "@faker-js/faker/locale/es_MX";

//Arreglos
//Se genera un arreglo de números
let arregloNumeros = [];
for (let index = 0; index < 10; index++) {
    const element = faker.number.int({min:1,max:200});
    arregloNumeros.push(element);
}

//Se genera un arreglo de productos
let arregloProductos = [];
for (let index = 0; index < 10; index++) {
    const producto = faker.commerce.product();
    arregloProductos.push(producto);
}

//Se genera un arreglo de emial's
let arregloEmails = [];
for (let index = 0; index < 10; index++) {
    const email = faker.internet.email();
    arregloEmails.push(email);
}

//Se genera un arreglo de personas
let arregloPersonas = [];
for (let index = 0; index < 10; index++) {
    const persona = faker.person.fullName();
    arregloPersonas.push(persona);
}

// console.log('Contenido de arregloNumeros: ', arregloNumeros);
// console.log('Contenido de arregloProductos: ', arregloProductos);
// console.log('Contenido de arregloEmails: ', arregloEmails);

console.log('Contenido del índice [3] de arregloEmails: ', arregloEmails[3]);
console.log('Contenido de arregloProductos.toString(): ', arregloProductos.toString());
console.log('Contenido de arregloProductos.join(): ', arregloProductos.join('|'));

//Usando forEach con función de flecha.
console.log('Contenido de arregloEmails Usando forEach:');
arregloEmails.forEach(email => {
    console.log(email);
});

//Usando forEach con función anónima.
console.log('Contenido de arregloProductos Usando forEach:');
arregloProductos.forEach(function(elemento) {
    console.log(elemento);
});

//Usando for of
console.log('Contenido de arregloNumeros usando For-Of:');
for (const numero of arregloNumeros) {
    console.log(`número: ${numero}`);
}

//Usando for clásico
console.log('Contenido de arregloPersonas usando for clásico:');
for (let index = 0; index < arregloPersonas.length; index++) {
    const persona = arregloPersonas[index];
    console.log(persona);
}

//Crear arreglo con split()
const cadena = faker.lorem.words();
const palabras = cadena.split(' ');
console.log('Cadena: ', cadena);
let indice = 0;
palabras.forEach(palabra => {    
    console.log(`Palabra[${indice}] ${palabra}`);
    indice++;
});
