const haveRol = (...rols) => {
    return (req, res, next) => {
        if(!req.user){
            return res.status(500).json({
                msg: 'Se requiere validar token antes'
            })
        }

        if(!rols.includes(req.user.rol)){
            return res.status(401).json({
                msg: `El rol ${req.user.rol} no esta presente dentro de los roles validos (${rols})`
            })
        }

        next();
    }
}

module.exports = {
    haveRol
}