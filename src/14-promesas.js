import { findInvoiceById } from './data/facturas';

//Se procesa el resultado o error de la promesa dentro de la función.
findInvoiceById(2)
.then((resultado) => {
    console.log(`Factura encontrada con Id = ${resultado.id}: `, resultado);
    console.log('Se realizó con éxito una tarea con demora');
}).catch((error) => {
    console.error(error);
});
