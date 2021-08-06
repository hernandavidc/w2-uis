const config = require('config');
const express = require('express');
const cors = require('cors')
const routerUser = require('../routes/users');
const initDebug = require('debug')('app:init');
const dbDebug = require('debug')('app:db');
const morgan = require('morgan');

class Server{
    constructor(){
        this.app = express();
        this.usersPath = '/api/users';

        this.middlewares();
        
        this.routes();
    }

    routes(){
        this.app.get('/', function (req, res) {
            res.send('GET request to homepage')
        })
        
        this.app.use(this.usersPath, routerUser);
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static('public')); 
    }

    listen(){
        //Utilizar variables de configuración
        console.log(`Db name: ${ config.get('dbConfig.host') }`);
        console.log(`Db port: ${ config.get('dbConfig.port') }`);

        if(this.app.get('env') === 'dev'){
            this.app.use(morgan('tiny'));
            initDebug('Manejo de entorno de dev, morgan cargado');
        }
        
        //Fragmento codigo de DB
        dbDebug('Inicio de conection DB');

        this.app.listen(5000, () => {
            console.log("Corriendo server en el puerto 5000");
        })
    }
}

module.exports = Server;