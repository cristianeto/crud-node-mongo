const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

/**Exportar. model le paso el nombre de la coleccion en Mongo, y Nombre del Shema */
module.exports = mongoose.model('tasks', TaskSchema); 