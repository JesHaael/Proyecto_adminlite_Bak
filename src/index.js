const express = require('express');
const ConectarBD = require('../config/db');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
// enlazar conexion con la base de datos 
ConectarBD();
app.use(cors());
//habiiltar expess.json
app.use(express.json({extended: true}));//mirar
// rutas de aplicacion

//app.use(express.json());
app.use("/api/clientes", require("../routes/cliente"));
app.use("/api/proveedores", require("../routes/proveedor"));
app.use('/api/auth',require("../routes/auth"));
app.use('/api/usuarios', require("../routes/usuarios"));

app.get('/',(req, res) =>{
    res.send('Bienvenido estamos desde el navegador');
})

app.listen(port,() =>console.log("Esta conectado el servidor con el puerto ", port) );
