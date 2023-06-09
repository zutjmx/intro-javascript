//Faker para simular datos
import { faker } from "@faker-js/faker/locale/es_MX";

//Función que genera un arreglo de 10 números enteros a paratir de un rango
const generaEnteros = (minimo, maximo) => {
    let arrEnteros = [];
    for (let index = 0; index < 10; index++) {
        const elemento = faker.number.int({min:minimo,max:maximo});
        arrEnteros.push(elemento);
    }
    return arrEnteros;
}

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

//Función para generar objeto Dirección
const generaDireccion = () => {
    const objetoDireccion = {
        id: faker.number.int({min:1, max:100}),
        calle: faker.location.street(),
        numero: faker.number.int({min:1,max:1000}).toString(),
        colonia: faker.location.county(),
        ciudad: faker.location.city(),
        estado: faker.location.state(),
        cp: faker.location.zipCode(),
        pais: faker.location.country(),
    };
    return objetoDireccion;
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
        direccion: generaDireccion(),
        email: faker.internet.email()
    },
    {
        id: faker.number.int({min:1,max:1000}),
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: generaDireccion(),
        email: faker.internet.email()
    },
    {
        id: faker.number.int({min:1,max:1000}),
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: generaDireccion(),
        email: faker.internet.email()
    },
    {
        id: faker.number.int({min:1,max:1000}),
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: generaDireccion(),
        email: faker.internet.email()
    }
];

const segundoArregloFacturas = [
    {
        id: 1,
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: generaDireccion(),
        email: faker.internet.email()
    },
    {
        id: 2,
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: generaDireccion(),
        email: faker.internet.email()
    },
    {
        id: 3,
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: generaDireccion(),
        email: faker.internet.email()
    },
    {
        id: 4,
        fecha: faker.date.anytime(),
        descripcion: generaDescripcion(),
        cliente: generaCliente(),
        items: generaItems(),
        direccion: generaDireccion(),
        email: faker.internet.email()
    }
];

const buscaFacturaPorId = (id) => {
    return segundoArregloFacturas.find(factura => factura.id === id);
}


//Se ejecuta la promesa dentro de una función.
const findInvoiceById = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const resultado = buscaFacturaPorId(id);
            if(resultado) {
                resolve(resultado);
            } else {
                reject(`No se encontró la factura con Id: ${id}`);
            }
        }, 2500);
    });
    return promesa;
}

export {
    generaEnteros,
    generaCliente,
    buscaFacturaPorId,
    findInvoiceById, 
    facturas, 
}
