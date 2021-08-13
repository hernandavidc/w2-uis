
const { Router } = require('express');
const { check } = require('express-validator');

const { validateData, validateJWT, haveRol } = require('../middlewares');

const { emailExists, rolExists, userIdExists } = require('../helpers/req-validators');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', [
    check('id', 'El id no es vaido').isMongoId(),
    check('id').custom( userIdExists ),
    check('rol').custom( rolExists ),
    validateData
], usuariosPut );

router.post('/', [
    validateJWT,
    haveRol('Admin', 'Seller'),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom( emailExists ),
    check('password', 'Las pass debe contener minimo 6 Dig').isLength({ min: 6 }),
    check('rol').custom( rolExists ),
    validateData
], usuariosPost );

router.delete('/:id', [
    validateJWT,
    haveRol('Admin'),
    check('id', 'El id no es vaido').isMongoId(),
    check('id').custom( userIdExists ),
    validateData
], usuariosDelete );

router.patch('/', usuariosPatch );

module.exports = router;