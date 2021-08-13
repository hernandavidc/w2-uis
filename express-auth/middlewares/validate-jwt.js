const config = require('config');
const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/ursers');

const validateJWT = async(req = request, res = response, next) => {
    const token = req.header('token');

    if(!token){
        return res.status(401).json({ msg: 'La petición requiere token auth' })
    }

    try{
        const { userId } = jwt.verify(token, config.get('SECRETORPRIVATEKEY'));

        const user = await User.findById(userId);

        if(!user && !user.state){
            return res.status(401).json({ msg: 'Token no es valido' })
        }

        req.user = user;
        next();
    } catch(err){
        return res.status(401).json({ msg: 'Token no es valido' })
    }
}

module.exports = {
    validateJWT
}