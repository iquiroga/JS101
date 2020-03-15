const fs = require('fs');


let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON: function (nuevaTarea) {
        return fs.writeFileSync(this.archivo, JSON.stringify(nuevaTarea, 'utf-8'));
    }
}
module.exports = archivoTareas;