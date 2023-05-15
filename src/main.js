//Clases y Objetos.
import { faker } from "@faker-js/faker/locale/es_MX";

//Declaración de clase, según una búsqueda en Google
class Persona {
    constructor(primerNombre,aPaterno,aMaterno,fechaNacimiento) {
        this.primerNombre = primerNombre;
        this.aPaterno = aPaterno;
        this.aMaterno = aMaterno;
        this.fechaNacimiento = fechaNacimiento;
    }
}

const persona = new Persona(faker.person.firstName(), 
                            faker.person.lastName(), 
                            faker.person.middleName(), 
                            faker.date.birthdate({min:1930,max:1990}));

console.log('Persona:', persona);

//Objeto según el curso
const factura = {
    id: faker.number.int({min:1,max:1000}),
    fecha: faker.date.anytime(),
    nombre: faker.lorem.paragraph(),
    cliente: faker.person.fullName(),
    direccion: faker.location.streetAddress(),
    email: faker.internet.email(),
    total: faker.number.int(2000),
}

console.log('Se imprime la factura: ',factura);
console.log('Se imprime nombre de la factura: ',factura.nombre);
console.log('Se imprime cliente de la factura: ',factura.cliente);
