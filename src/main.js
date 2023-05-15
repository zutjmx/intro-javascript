//Clases y Objetos.
import { faker } from "@faker-js/faker/locale/es_MX";

//Datos para persona.
const idCliente = faker.number.int({min:1,max:1000});
const nombreCliente = faker.person.firstName();
const apellidoPaterno = faker.person.lastName();
const apellidoMaterno = faker.person.middleName();
const fechaNacimientoCliente = faker.date.birthdate({min:18,max:80,mode:'age'});

//Declaración y construcción de un objeto.
const factura = {
    id: faker.number.int({min:1,max:1000}),
    fecha: faker.date.anytime(),
    descripcion: faker.lorem.paragraph(1),
    cliente: {
        id: idCliente,
        nombre: nombreCliente,
        aPaterno: apellidoPaterno,
        aMaterno: apellidoMaterno,
        fechaNacimiento: fechaNacimientoCliente,
    },
    items: [
        {
            id: 1,
            descripcion: 'laptop Asus VivoBook',
            cantidad: 1,
            precio: 1900,
        },
        {
            id: 2,
            descripcion: 'Huawei Nova Y90',
            cantidad: 1,
            precio: 4500,
        }
    ],
    direccion: faker.location.streetAddress(),
    email: faker.internet.email(),
    total: faker.number.int(2000),
    obtenDescripcion: function() {
        return `::${this.descripcion}::`;
    },
    obtenTotal: () => {
        return `::${factura.total}::`;
    }
}

console.log('Se imprime la factura: ',factura);
console.log('Se imprime descripcion de la factura: ',factura.descripcion);
console.log('Se imprime cliente de la factura: ',factura.cliente);
console.log('Se imprime items de la factura: ',factura.items);
console.log('Se imprime descripcion de la factura por medio del método obtenDescripcion: ',factura.obtenDescripcion());
console.log('Se imprime total de la factura por medio del método obtenTotal: ',factura.obtenTotal());