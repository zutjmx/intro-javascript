//Faker para simular datos
import { faker } from "@faker-js/faker/locale/es_MX";

//Arreglo método Map
//Se crea un arreglo de números enteros aleatorios.
let numerosEnteros = [];
for (let index = 0; index < 10; index++) {
    const elemento = faker.number.int({min:1,max:100});
    numerosEnteros.push(elemento);
}

console.log(`numerosEnteros ${numerosEnteros}`);

var dobles = numerosEnteros.map(function(x) {
    return x * 2;
});
console.log(`dobles ${dobles}`);

//Función para generar objeto cliente.
const generaCliente = () => {
    const objetoCliente = {
        id: faker.number.int({min:1,max:1000}),
        nombre: faker.person.firstName(),
        aPaterno: faker.person.lastName(),
        aMaterno: faker.person.middleName(),
        fechaNacimiento: faker.date.birthdate({min:18,max:80,mode:'age'}),
    }
    return objetoCliente;
}

//Función para crear un arreglo de objetos para la propiedad items
const generaItems = () => {
    let itemArray = [];
    for (var i = 0; i < 20; i++) {
        const item = {
            id: faker.number.int({min:1,max:1000}),
            descripcion: faker.commerce.product(),
            cantidad: faker.number.int({min:1,max:10}),
            precio: faker.number.float({min:1,max:2000,precision:0.01}),
        }
        itemArray.push(item);
    }
    return itemArray;
}

//Función para generar cadenas para la propiedad descripción.
const generaDescripcion = () => {
    return faker.company.catchPhrase();
}

//Arreglo de objetos de tipo factura
const facturas = [
    {
        id: faker.number.int({min:1,max:1000}),
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: faker.location.streetAddress(),
        email: faker.internet.email()
    },
    {
        id: faker.number.int({min:1,max:1000}),
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: faker.location.streetAddress(),
        email: faker.internet.email()
    },
    {
        id: faker.number.int({min:1,max:1000}),
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: faker.location.streetAddress(),
        email: faker.internet.email()
    },
    {
        id: faker.number.int({min:1,max:1000}),
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: faker.location.streetAddress(),
        email: faker.internet.email()
    }
];

console.log('Arreglo de facturas: ', facturas);

const descripcionesfacturas = facturas.map(factura => {
    return factura.descripcion;
});

console.log('Solo descripciones de las facturas: ', descripcionesfacturas);

const nombresClientesfacturas = facturas.map(factura => {
    return factura.cliente.nombre;
});

console.log('Solo nombres de clientes de las facturas: ', nombresClientesfacturas);
