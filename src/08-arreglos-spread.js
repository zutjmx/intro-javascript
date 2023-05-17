//Faker para simular datos
import { faker } from "@faker-js/faker/locale/es_MX";

//Arreglos con spread
//Se genera un arreglo de productos
let arregloProductosUno = [];
for (let index = 0; index < 10; index++) {
    const producto = faker.commerce.product();
    arregloProductosUno.push(producto);
}

//Se genera segundo arreglo de productos
let arregloProductosDos = [];
for (let index = 0; index < 10; index++) {
    const producto = faker.commerce.product();
    arregloProductosDos.push(producto);
}

console.log('Contenido de arregloProductosUno Usando forEach:');
arregloProductosUno.forEach(function(elemento) {
    console.log(elemento);
});

console.log('Contenido de arregloProductosDos Usando forEach:');
arregloProductosDos.forEach(function(elemento) {
    console.log(elemento);
});

//Se genera tercer arreglo de productos usando spread para arreglos
let arregloProductosTres = [...arregloProductosDos, ...arregloProductosUno, 1, 2, 3, 4, 5];
console.log('Contenido de arregloProductosTres Usando forEach:');
arregloProductosTres.forEach(function(elemento) {
    console.log(elemento);
});

arregloProductosTres = arregloProductosTres.concat('A','B','C','D','E','F');

console.log(arregloProductosTres);

//Se genera nuevo arreglo sin elementos duplicados. 
let arregloSinduplicados = arregloProductosTres.filter((item,index)=>{
    return arregloProductosTres.indexOf(item) === index;
})
console.log('Arreglo sin duplicados: ', arregloSinduplicados);
