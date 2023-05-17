//Faker para simular datos
import { faker } from "@faker-js/faker/locale/es_MX";

//Desestructuración de arreglos
//Se crea arreglo de nombres de usuario
let usuarios = [];
for (let index = 0; index < 10; index++) {
    const element = faker.internet.userName();
    usuarios.push(element);
}
console.log('Usuarios',usuarios);

//Des estructurar los elementos del arreglo en variables
const [usuario1,usuario2,usuario3,usuario4,usuario5,,,,usuario9] = usuarios;

console.log(`usuario1: ${usuario1}`);
console.log(`usuario2: ${usuario2}`);
console.log(`usuario3: ${usuario3}`);
console.log(`usuario4: ${usuario4}`);
console.log(`usuario5: ${usuario5}`);
console.log(`usuario9: ${usuario9}`);
