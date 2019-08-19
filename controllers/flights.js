var Flight = require('../models/flight');
var Ticket = require('../models/ticket');
module.exports = {
  index,
  show,
  new: newFlight,
  //delete: deleteFlight,
  create
};

function index(req, res) {
    Flight.find({}, function(err, flights){
    res.render('flights/index',{flights})});
}

function show(req, res) {


  Flight.findById(req.params.id, function(err, flight){
    Ticket.find({flight: flight._id}, function(err, tickets){
    res.render('flights/show',{flight, tickets})})})}

function newFlight(req, res) {
  res.render('flights/new');
}

function create(req, res) {
  if(!req.body.departs){
      var redate = new Date();
      redate.setFullYear(redate.getFullYear()+1);
      req.body.departs = redate
  }
  var flight = new Flight(req.body);
  flight.save(function(err) {
    if(err)return res.redirect('/flights/new');
    console.log(flight);
    res.redirect('/flights');
});
}