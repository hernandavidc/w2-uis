const validateData = require('../middlewares/validate-data');
const validateJWT = require('../middlewares/validate-jwt');
const haveRol = require('../middlewares/validate-rol');

module.exports = {
    ...validateData,
    ...validateJWT,
    ...haveRol
}