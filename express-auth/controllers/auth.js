const { request, response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/ursers');

const { generatorJWT } = require('../helpers/generator-jwt');

const login = async(req = request, res = response) => {
    const { email, password } = req.body;
    const strError = 'Email / password incorrecto';

    try{
        const user = await User.findOne({ email, state: true });
        if(!user){
            return res.status(400).json({
                msg: strError
            })
        }

        const validPassword = bcrypt.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                msg: strError
            })
        }

        const token = await generatorJWT(user.id);

        res.json({
            user, token
        });
    } catch(err){
        console.log(err);
        res.status(500).json({
            msg: 'Error interno del sevidor, contacte con el administrador'
        })
    }
}

module.exports = {
    login
}