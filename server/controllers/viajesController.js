const Trips = require('../models/Trips');

exports.tripsQuery =async (req,res) => {
        const trips = await Trips.findAll()
        res.render('viajes',{
            pagina: 'Proximos Viajes',
            trips
        })
}