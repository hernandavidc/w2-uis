const express = require('express');
const app = express();

app.use(express.json)

const data = [
    { name: 'Hernan', cc: 12345}, 
    { name: 'Laura', cc: 6542},
    { name: 'Daniel', cc: 7654},
]

app.get('/', function (req, res) {
    res.send('GET request to homepage')
})

app.get('/api/users', function (req, res) {
    res.send([{ name: 'Hernan', cc: 12345}, { name: 'Laura', cc: 6542}])
})

app.post('/api/users', function(req, res) {
    const user = {
        cc: req.body.cc,
        name: req.body.name
    }
    data.push(user);
    res.send('Guardado con exito')
})

app.get('/api/users/:cc', function(req, res) {
    let usuario = data.find(u => u.cc === parseInt(req.params.cc));
    if(!usuario) res.status(404).send('El usuario no fue encontrado');
    res.send(usuario);
})

app.listen(5000, () => {
    console.log("Corriendo server en el puerto 5000");
})