const mongoose = require('mongoose');
//el modelo que vamos a implementar debe sesr el mismo a la base de datos
    const proveedorSchema = mongoose.Schema({
        nombres:{
            type: 'string',
            required: true,
        },
        email:{
            type: 'string',
            required: true,
        },
        numeroContacto:{
            type: 'Number',
            required: true,
        },
        nit:{
            type: 'Number',
            required: true,
        },
        direccion:{
            type: 'string',
            required: true,
        },
        tipo:{
            type: 'string',
            required: true,
        }
    },
    {versionkey: false}
);

module.exports = mongoose.model('Proveedor', proveedorSchema);