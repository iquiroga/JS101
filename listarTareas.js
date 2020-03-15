let archivoTareas = require('./tareas');

let tareas = archivoTareas.leerJSON();

let ListarTareas = tareas.forEach((tarea, index) => {
    
  console.log(`${index}. ${tarea.titulo} - ${tarea.estado}`);
  
});

module.exports = ListarTareas;