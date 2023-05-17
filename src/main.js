//Faker para simular datos
import { faker } from "@faker-js/faker/locale/es_MX";

//Desestructuración de objetos
let usuario = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    dominio: faker.internet.domainName(),
    fechaDeAlta: faker.date.recent({days:10}),
    ranking: faker.number.int({min:1,max:10}),
    empresa: faker.company.name(),
    area: faker.person.jobArea(),
    ubicacion: faker.location.secondaryAddress(),
    funcion: faker.lorem.paragraph(),
};

console.log('Usuario: ', usuario);

//Se desestructuran algunas propiedades del objeto usuario con una función.
const detallesUsuario = ({ username, dominio, email, empresa, area, funcion }) => {
    console.log('Algunos detalles del usuario:')
    console.log(`username: ${username}`);
    console.log(`dominio: ${dominio}`);
    console.log(`email: ${email}`);
    console.log(`empresa: ${empresa}`);
    console.log(`area: ${area}`);
    console.log(`funcion: ${funcion}`);
}

detallesUsuario(usuario);
