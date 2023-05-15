//Clases y Objetos.
import { faker } from "@faker-js/faker/locale/es_MX";

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
    direccion: faker.location.streetAddress(),
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

//Se imprime objeto y algunas propiedades y métodos
console.log('Se imprime la factura: ',factura);
console.log('Se imprime descripcion de la factura: ',factura.descripcion);
console.log('Se imprime cliente de la factura: ',factura.cliente);
console.log('Se imprime items de la factura: ',factura.items);
console.log('Se imprime descripcion de la factura por medio del método obtenDescripcion: ',factura.obtenDescripcion());
console.log('Se imprime total de la factura por medio del método total: ',factura.total());