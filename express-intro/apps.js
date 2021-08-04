const express = require('express');
const Joi = require('joi');

const app = express();

app.use(express.json())

const data = [
    { "name": 'Hernan', "cc": "12345678"}, 
    { "name": 'Laura', "cc": "65421234"},
    { "name": 'Daniel', "cc": "76541278"},
]

app.get('/', function (req, res) {
    res.send('GET request to homepage')
})

app.get('/api/users', function (req, res) {
    res.send(data)
})


app.get('/api/users/:cc', function(req, res) {
    let user = exitsUser(req.params.cc);
    if(!user){
        res.status(404).send('El usuario no fue encontrado');
        return;
    }
    res.send(user);
})

app.post('/api/users', function(req, res) {
    const user = {
        cc: req.body.cc,
        name: req.body.name
    }

    const { value, error } = validateUser(user);

    if(!error){ data.push(value); } 
    else { 
        res.status(400).send(error.details[0].message) 
        return;
    }
    
    res.send('Guardado con exito')
})

//UPDATE
app.put('/api/users/:cc', function(req, res){

    const { value, error } = validateUser({
        cc: req.body.cc,
        name: req.body.name
    });

    if(error){
        const mesaje = error.details[0].message;
        res.status(400).send(mesaje);
        return;
    }

    let user = exitsUser(req.params.cc);
    if(!user){ 
        res.status(404).send('El usuario no fue encontrado');
        return;
    }

    user.name = req.body.name;
    user.cc = req.body.cc;
    res.send(user);
});

//DELETE
app.delete('/api/users/:cc', function(req, res){
    let user = exitsUser(req.params.cc);
    if(!user){
        res.status(404).send('El usuario no fue encontrado');
        return;
    }

    const index = data.indexOf(user);
    data.splice(index, 1);

    res.send(user);
})

app.listen(5000, () => {
    console.log("Corriendo server en el puerto 5000");
})

function exitsUser(cc){
    return data.find(u => u.cc === cc);
}

function validateUser(user){
    const schema = Joi.object({
        cc: Joi.string().alphanum().min(7).required(),
        name: Joi.string().min(3).required()
    })

    return schema.validate(user);
}