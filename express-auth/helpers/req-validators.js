const Rol = require('../models/rol');
const User = require('../models/ursers');

const emailExists = async (email = '') => {
    const user = await User.findOne({ email });
    if(user){
        throw new Error(`El correo ${email} ya se encuentra registrado`);
    }
}

const rolExists = async (_rol = '') => {
    const rol = await Rol.findOne({ rol: _rol });
    if(!rol){
        throw new Error(`El rol ${ _rol } no existe en nuestro sistema`);
    }
}

const userIdExists = async(id='') => {
    const user = await User.findById(id);
    if(!user){
        throw new Error(`No existe user con el id: ${id}`)
    }
}

module.exports = {
    emailExists,
    rolExists,
    userIdExists
}