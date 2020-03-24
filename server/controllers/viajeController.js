const Trip = require('../models/Trips');

exports.tripGetById = (req,res) => {
    Trip.findByPk(req.params.id)
        .then(trip => res.render('viaje',{
            trip
        }))
        .catch(error => console.log(error))
}