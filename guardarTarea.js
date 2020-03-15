let archivoTareas = require('./tareas');

let tareas = archivoTareas.leerJSON();
//let escribirTareas = archivoTareas.escribirJSON();

console.log(tareas);


/*let EscribirNuevaTarea = (titulo, estado) => {
  tareas.push({titulo: titulo, estado: estado});
}

console.log(EscribirNuevaTarea('Hola', 'Chau'));


module.exports = EscribirNuevaTarea;*/