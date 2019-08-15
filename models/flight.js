var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
        type:String,
        enum: ['American','Southwest','United']
    },

    flightNo:{
        type: Number,
        min:10,
        max:9999
    },

    departs:
    {
        type: Date,
        default: defaultDate = new Date().setFullYear(Date().getFullYear()+1),
    }
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);