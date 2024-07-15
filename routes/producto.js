const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//creamos las rutas del CRUD
router.post('/',productoController.agregarProductos);
router.get('/',productoController.mostrarProductos);
router.get('/:id',productoController.buscarProducto); 
router.put('/:id',productoController.actualizarProducto); 
//router.patch('/:id',clienteController.modificarClientes); 
router.delete('/:id',productoController.eliminarProductos); 

module.exports = router;
