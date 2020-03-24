const Trip = require('../models/Trips');
const Testimonial = require('../models/Testimoniales');

exports.indexQuery = (req,res) => {
    const promises = [];
    promises.push(Trip.findAll({
         //configurar limite de objetos traidos
        limit: 3
    }) )
    promises.push(Testimonial.findAll({
        limit: 3
    }) )

    const resultado = Promise.all(promises);
    resultado.then(resultado => res.render('index',{
        clase: 'home',
        trips: resultado[0],
        testimoniales: resultado[1]
    }))
    .catch(error => console.log(error))
        
}