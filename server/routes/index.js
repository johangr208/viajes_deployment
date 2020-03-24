const express = require('express');
const router = express.Router();

// controladores
const homeController = require('../controllers/homeController')
const nosotrosController = require('../controllers/nosotrosController')
const viajesController = require('../controllers/viajesController')
const viajeController = require('../controllers/viajeController')
const testimonialesController = require('../controllers/testimonialesController')

module.exports = function () {
    router.get('/',homeController.indexQuery);
    
    router.get('/nosotros',nosotrosController.nosotrosInfo);

    router.get('/viajes',viajesController.tripsQuery);

    router.get('/viajes/:id',viajeController.tripGetById);

    router.get('/testimoniales',testimonialesController.testimonialesGetQuery);

    // cuando se llena el formulario
    router.post('/testimoniales',testimonialesController.testimonialesPostQuery);

    return router;
}
