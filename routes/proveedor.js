const express = require('express');
const router = express.Router();
const proveerdorController = require('../controllers/proveedorController');

//creamos las rutas del CRUD
router.post('/',proveerdorController.agregarProveedores);
router.get('/',proveerdorController.mostrarProveedores);
router.get('/:id',proveerdorController.buscarProveedor); 
router.put('/:id',proveerdorController.actualizarProveedor); 
//router.patch('/:id',proveerdorController.modificarProveedores); 
router.delete('/:id',proveerdorController.eliminarProveedores); 

module.exports = router;
