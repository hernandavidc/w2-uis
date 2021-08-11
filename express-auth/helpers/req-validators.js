const Rol = require('../models/rol');
const User = require('../models/ursers');

const emailExists = async (email = '') => {
    const user = await User.findOne({ email });
    if(user){
        throw new Error(`El correo ${email} ya se encuentra registrado`);
    }
}

const rolExists = async (_rol = '') => {
    const rol = await Rol.findOne({ _rol });
    if(!rol){
        throw new Error(`El rol ${ _rol } no existe en nuestro sistema`);
    }
}

module.exports = {
    emailExists,
    rolExists
}