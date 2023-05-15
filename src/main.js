import { faker } from "@faker-js/faker/locale/es_MX";

//Forma tradicional de definir una función, ya casi no se usa.
function funcionSuma(a, b) {
    return a+b;
}

//Forma función anónima.
const numeroAleatorio = function(minimo, maximo) {
    return faker.number.float({min: minimo, max: maximo});
}

//Función de flecha, forma más usada.
const funcionHola = (nombre = 'Jesús', apellidoPaterno = 'Zúñiga', apellidoMaterno = 'Trejo', edad = 0) => {
    return `Hola ${nombre} ${apellidoPaterno} ${apellidoMaterno}, edad: ${edad}`;
}

const fib = (n) => {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

const primerNombre = faker.person.firstName();
const paterno = faker.person.lastName();
const materno = faker.person.middleName();
const edad = faker.number.int({min:18,max:90});
const resultadoHola = funcionHola(primerNombre,paterno,materno,edad);

const primerSumando = faker.number.int();
const segundoSumando = faker.number.int();

const enteroAletorio = faker.number.int({min:1,max:10});

console.log(`Resultado de funcionHola(): ${resultadoHola}`);

console.log(`Resultado de ${primerSumando} + ${segundoSumando} = ${funcionSuma(primerSumando,segundoSumando)}`);

console.log(`Generar número real aleatorio entre 0 y 100: ${numeroAleatorio(0,100)}`);

console.log(`Número de Fibonacci de ${enteroAletorio} = ${fib(enteroAletorio)}`);
