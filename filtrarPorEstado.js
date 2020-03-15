let archivoTareas = require('./tareas');

let tareas = archivoTareas.leerJSON();

let filtrarPorEstado = (estadoAFiltrar) => {
  let filtrado = tareas.filter(function(estadoTarea){
    return estadoTarea.estado == estadoAFiltrar;
  });
    return filtrado;
};

module.exports = filtrarPorEstado;
