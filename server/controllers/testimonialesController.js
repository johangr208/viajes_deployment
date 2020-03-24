const Testimonial = require('../models/Testimoniales');

exports.testimonialesGetQuery = (req,res) => {
    Testimonial.findAll()
        .then(testimoniales => res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        }))
}

exports.testimonialesPostQuery = (req,res) => {
    // validar los campos
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre) {
        errores.push({'mensaje' : 'agrega tu nombre'})
    }
    if(!correo) {
        errores.push({'mensaje' : 'agrega tu correo'})
    }
    if(!mensaje) {
        errores.push({'mensaje' : 'agrega tu mensaje'})
    }

    //revisar errores
    if(errores.length > 0) {
        // muestra la vista con errores
        res.render('testimoniales', {
            //para que no se pierda los datos insertados anteriormente
            //volvemos a mandar nombre,correo,mensaje
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        // almacenar en BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error));
    }
}