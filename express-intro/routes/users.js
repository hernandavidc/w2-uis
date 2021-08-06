const express = require('express');
const _router = express.Router();

const {
        usersGet, 
        userGetByCc,
        userPost,
        userPut,
        userDel,
    } = require('../controllers/users')

_router.get('/', usersGet)

_router.get('/:cc', userGetByCc)

_router.post('/', userPost)

//UPDATE
_router.put('/:cc', userPut);

//DELETE
_router.delete('/:cc', userDel)

module.exports = _router;