var Flight = require('../models/flight');

function create(req, res) {
    Flight.findById(req.params.id,function(err, flight)
    {
        flight.destinaions.push(req.body);
        flight.save(function(err) {
    res.redirect(`/flights/${flight.id}`);
    }
    )
    })
  }

module.exports =
{
    create,
};