const { Schema, model } = require('mongoose');

const UsersSchema = Schema({
    name: {
        type: String,
        required: [true, 'Schema: El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Schema: El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Schema: Las password es obligatorio']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: true
    }
});

UsersSchema.methods.toJSON = function(){
    const { __v, password, _id, ...user  } = this.toObject();
    user.userId = _id; 
    return user;
}

module.exports = model('User', UsersSchema);