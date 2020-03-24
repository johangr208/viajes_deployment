const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser')
const configs = require('./config')
const db = require('./config/database.js')


db.authenticate()
    .then(() => console.log('db conectada'))
    .catch(error => console.log(error))


//configurar express
const app = express();

// habilitar pug
app.set('view engine','pug');
// añadir vistas
app.set('views',path.join(__dirname,'./views'));
// cagar carpeta statica public
app.use(express.static('public'));

// validar si estamos en desarrollo o producccion
const config = configs[app.get('env')];

//variaable para el sitio web
app.locals.titulo = config.nombresitio;

//muestra el año actual
app.use((req,res,next) => {
    //crear nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
})
// ejecutamos body-parser
app.use(bodyParser.urlencoded({extended:true}));


//cargar rutas
app.use('/', routes())
//puerto y host para la app
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
app.listen(port,host, () => {
    console.log('el servidor esta funcionando')
});

