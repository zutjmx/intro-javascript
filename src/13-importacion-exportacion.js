import { generaEnteros, facturas, generaCliente } from './data/facturas';

const numerosEnteros = generaEnteros(20,30);
console.log(`numerosEnteros ${numerosEnteros}`);

const dobles = numerosEnteros.map(function(x) {
    return x * 2;
});
console.log(`dobles ${dobles}`);

console.log('Arreglo de facturas: ', facturas);

const descripcionesfacturas = facturas.map(factura => {
    return factura.descripcion;
});

console.log('Solo descripciones de las facturas: ', descripcionesfacturas);

const nombresClientesfacturas = facturas.map(factura => {
    return factura.cliente.nombre;
});

console.log('Solo nombres de clientes de las facturas: ', nombresClientesfacturas);

//Uso del método find
const facturaConIdMayorA10MenorA100 = facturas.find(factura => (factura.id > 10 && factura.id < 100));
console.log(facturaConIdMayorA10MenorA100? facturaConIdMayorA10MenorA100 : 'No se encontró factura con Id > 10 y < 100');

const coincideNombre = facturas.find(factura => factura.cliente.nombre === 'Juan');
console.log(coincideNombre? coincideNombre : 'No se encontró factura cuyo nombre de cliente sea Juan');

//Uso del método filter
const facturasConIdMayorA200 = facturas.filter(factura => factura.id > 200);
console.log('Facturas con Id mayor a 200: ',facturasConIdMayorA200);

//Uso del método some
const resultadoSome = facturas.some(factura => factura.cliente.nombre === 'Ana');
console.log('Hay al menos una factura que tiene un cliente con nombre Ana',resultadoSome);

//Se genera un nuevo cliente con la función exportada generaCliente de ./data/facturas
let nuevoCliente = generaCliente();
console.log('Nuevo cliente: ', nuevoCliente);
