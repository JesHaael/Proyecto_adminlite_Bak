const mongoose = require('mongoose');
//el modelo que vamos a implementar debe sesr el mismo a la base de datos
    const productoSchema = mongoose.Schema({
        nombre:{
            type: 'string',
            required: true,
        },
        marca:{
            type: 'string',
            required: true,
        },
        cantidad:{
            type: 'Number',
            required: true,
        }
    },
    {versionkey: false}
);

module.exports = mongoose.model('Producto', productoSchema);