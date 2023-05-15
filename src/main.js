import { faker } from "@faker-js/faker/locale/es_MX";

//Forma tradicional de definir una función, ya casi no se usa.
function funcionSuma(a, b) {
    return a+b;
}

//Función de flecha, forma más usada.
const funcionHola = (nombre = 'Jesús', apellidoPaterno = 'Zúñiga', apellidoMaterno = 'Trejo', edad = 0) => {
    const saludo = `Hola ${nombre} ${apellidoPaterno} ${apellidoMaterno}, edad: ${edad}`;
    return saludo;
}

const primerNombre = faker.person.firstName();
const paterno = faker.person.lastName();
const materno = faker.person.middleName();
const edad = faker.number.int({min:18,max:90});
const resultadoHola = funcionHola(primerNombre,paterno,materno,edad);

const primerSumando = faker.number.int();
const segundoSumando = faker.number.int();

console.log(`Resultado de funcionHola(): ${resultadoHola}`);

console.log(`Resultado de ${primerSumando} + ${segundoSumando} = ${funcionSuma(primerSumando,segundoSumando)}`);
