const { Router } = require('express');
const { check } = require('express-validator');

const { validateData } = require('../middlewares/validate-data')

const { login } = require('../controllers/auth');

const router = Router();

router.post('/login', [
    check('email', 'El correo es obligatorio y valido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateData
], login);

module.exports = router;