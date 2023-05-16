//Faker para simular datos
import { faker } from "@faker-js/faker/locale/es_MX";

//Datos para objeto compañía
const compania = {
    id: faker.database.mongodbObjectId(),
    nombre: faker.company.name(),
    frase: faker.company.buzzPhrase(),
}

//Operador ternario
console.log('Compañía: ',compania);

const promedio = faker.number.float({min:1,max:10,precision:0.01});
const estatus = (promedio > 5.9) ? 'Aprobado' : 'Rechazado';

console.log('Promedio: ',promedio);
console.log('Estatus: ',estatus);

let maximo = faker.number.int({max:100});

const a = faker.number.int({min:1,max:100});
const b = faker.number.int({min:1,max:100});
const c = faker.number.int({min:1,max:100});

maximo = a > b ? a : b;
maximo = maximo > c ? maximo : c;

console.log(`A = ${a}`);
console.log(`B = ${b}`);
console.log(`C = ${c}`);
console.log(`Máximo de {A,B,C} = ${maximo}`);
