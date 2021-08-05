const initDebug = require('debug')('app:init');
const dbDebug = require('debug')('app:db');
const express = require('express');
const config = require('config');
const routerUser = require('./routes/users');
const tokkenRequire = require('./middlewares/auth');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public')); 

//Utilizar variables de configuración
console.log(`Db name: ${ config.get('dbConfig.host') }`);
console.log(`Db port: ${ config.get('dbConfig.port') }`);

app.use(tokkenRequire);

if(app.get('env') === 'dev'){
    app.use(morgan('tiny'));
    initDebug('Manejo de entorno de dev, morgan cargado');
}

//Fragmento codigo de DB
dbDebug('Inicio de conection DB');

app.get('/', function (req, res) {
    res.send('GET request to homepage')
})

app.use('/api/users', routerUser);

app.listen(5000, () => {
    console.log("Corriendo server en el puerto 5000");
})