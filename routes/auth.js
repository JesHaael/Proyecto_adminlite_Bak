const express = require('express');
const router = express.Router();
const {check} =  require('express-validator');
const authController = require('../controllers/authController');
const auth  = require('../middleware/auth');

// autenticar el usuario
//api/auth

router.post('/',
    [
        check("email","agregar email valido").isEmail(),
        check("pasword","El pasword de be tener 10 caracteres").isLength({
            min:10,
        }),
    ],
    authController.autenticarUsuario
);
router.get('/',auth,authController.usuarioAutenticado); 
module.exports = router;
