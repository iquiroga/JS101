let archivoTareas = require('./tareas');

let tareas = archivoTareas.leerJSON();

let escribirNuevaTarea = (nombre, status) => {
  tareas.push({titulo: nombre, estado: status});
};

escribirNuevaTarea('Hola', 'Chau')

archivoTareas.escribirJSON(tareas)

module.exports = escribirNuevaTarea;

