const accion = process.argv[2];
const title = process.argv[3];

const nuevaTarea = require('./guardarTarea');
const filtrarEstado = require('./filtrarPorEstado');

switch(accion) {
    case 'listar':
        require('./listarTareas');
        break;

    // Micro desafío 1
    // Atajar el caso en que no se envíe un parámetro
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;
    //crear y guardar nueva tarea
    case 'crear':
        nuevaTarea(title, 'pendiente');
        console.log('Nueva tarea creada');
        break;
    // Micro desafío 2
    case 'filtrar':
        console.log(filtrarEstado(title));
        break;
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: (listar) o (crear "título de nuestra tarea)');
        break;
}
