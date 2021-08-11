const { Schema, model } = require('mongoose');

const RolSchema = Schema({
    rol: {
        type: String,
        required: [true, 'Schema: el rol es obligatorio']
    }
});

module.exports = model('Rol', RolSchema);