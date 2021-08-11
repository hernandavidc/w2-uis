
const { Router } = require('express');
const { check } = require('express-validator');

const { validateData } = require('../middlewares/validate-data');
const { emailExists, rolExists } = require('../helpers/req-validators');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom( emailExists ),
    check('password', 'Las pass debe contener minimo 6 Dig').isLength({ min: 6 }),
    check('rol').custom( rolExists ),
    validateData
], usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );

module.exports = router;