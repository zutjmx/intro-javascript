import { faker } from "@faker-js/faker/locale/es_MX";

var nombre = 'Jesús'; //Forma antigua de declarar variables, ya no se usa.
let aPaterno = 'Zúñiga'; //Forma nueva de declarar variables.
let aMaterno = 'Trejo'; //Forma nueva de declarar variables.

const pi = 3.1416; //Forma de declarar constantes.

const valorBooleano = true;

//Uso de faker para JS
const nombreAleatorio = faker.person.fullName();
const emailAleatorio = faker.internet.email();

const lineaArea = faker.airline.airline().name;
const numeroDeVuelo = faker.airline.flightNumber();
const numeroDeAsiento = faker.airline.seat();

console.log('Iniciando introducción a JavaScript.');
console.log('Valor de variable nombre: ', nombre);
console.log('Valor de variable apellido paterno: ', aPaterno);
console.log('Valor de variable apellido materno: ', aMaterno);
console.log('Valor de PI: ', pi);
//Concatenación de cadenas usando una plantilla, interpolación de cadenas, con el caracter 'backtick' o acento fuerte '`'
console.log(`Concatenando valores con plantilla: nombre completo [${nombre} ${aPaterno} ${aMaterno}], valor de PI: [${pi}] `);

if(valorBooleano) {
    console.log(`Valor de valorBooleano: ${valorBooleano}`)
}

console.log(`Valor de nombreAleatorio: ${nombreAleatorio}`);
console.log(`Valor de emailAleatorio: ${emailAleatorio}`);

//Mas template string
console.log(`Línea área: ${lineaArea}
            Número de vuelo: ${numeroDeVuelo}
            Asiento: ${numeroDeAsiento}`);
