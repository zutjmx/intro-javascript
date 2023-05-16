//Faker para simular datos
import { faker } from "@faker-js/faker/locale/es_MX";

//Datos para el objeto dirección.
const calle = faker.location.street();
const numeroCalle = faker.location.buildingNumber().trim();
const ciudad = faker.location.city();
const cp = faker.location.zipCode();
const entidadFederativa = faker.location.state();
const pais = faker.location.country();
const objetoDireccion = {
    id: faker.number.int({min:1,max:1000}),
    calle,
    numeroCalle,
    ciudad,
    cp,
    entidadFederativa,
    pais,
}

//Datos para el objeto cliente.
const idCliente = faker.number.int({min:1,max:1000});
const nombreCliente = faker.person.firstName();
const apellidoPaterno = faker.person.lastName();
const apellidoMaterno = faker.person.middleName();
const fechaNacimientoCliente = faker.date.birthdate({min:18,max:80,mode:'age'});
const objetoCliente = {
    id: idCliente,
    nombre: nombreCliente,
    aPaterno: apellidoPaterno,
    aMaterno: apellidoMaterno,
    fechaNacimiento: fechaNacimientoCliente,
    direccion: objetoDireccion
}

//Se crea un arreglo de objetos para la propiedad items
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

//Declaración y construcción de un objeto factura.
const factura = {
    id: faker.number.int({min:1,max:1000}),
    fecha: faker.date.anytime(),
    descripcion: faker.lorem.paragraph(1),
    cliente: objetoCliente,
    items: itemArray,
    email: faker.internet.email(),
    obtenDescripcion: function() {
        return `::${this.descripcion}::`;
    },
    total: () => {
        let total = 0;
        factura.items.forEach(item => {
            total = total + item.precio * item.cantidad;
        });
        return total.toFixed(2);
    }
}

console.log('Se imprime factura: ', factura);

//Para verificar que existe propiedad compania.nombre
console.log('Compañía de factura: ', factura.compania?.nombre);
//Así se evaluaba antes.
/* if (factura.compania != undefined && factura.compania.nombre) {
    console.log('Compañía de factura: ', factura.compania.nombre);
} else {
    console.log('la factura no tiene Compañía');
} */
//Así es más práctico.
if (factura.compania?.nombre) {
    console.log('Compañía de factura: ', factura.compania.nombre);
} else {
    console.log('la factura no tiene Compañía');
}

console.log('Cliente de factura: ', factura.cliente?.nombre);

console.log('Dirección del cliente de factura: ', factura.cliente?.direccion);

console.log('Calle de la dirección del cliente de factura: ', factura.cliente?.direccion?.calle);
