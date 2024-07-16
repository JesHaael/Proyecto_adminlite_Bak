const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

//creamos las rutas del CRUD
router.post('/',proveedorController.agregarProveedores);
router.get('/',proveedorController.mostrarProveedores);
router.get('/:id',proveedorController.buscarProveedor); 
router.put('/:id',proveedorController.actualizarProveedor); 
//router.patch('/:id',proveerdorController.modificarProveedores); 
router.delete('/:id',proveedorController.eliminarProveedores); 

module.exports = router;
