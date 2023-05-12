var nombre = 'Jesús'; //Forma antigua de declarar variables, ya no se usa.
let aPaterno = 'Zúñiga'; //Forma nueva de declarar variables.
let aMaterno = 'Trejo'; //Forma nueva de declarar variables.

const pi = 3.1416; //Forma de declarar constantes.

const valorBooleano = true;

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
