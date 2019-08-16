var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinaionSchema = new Schema({
    airport:
    {
        type:String,
        enum:['AUS', 'DAL', 'LAX','SEA']
    },
    arrival:
    {
        type: Date
    }
});

var flightSchema = new Schema({
    
    airline: {
        type:String,
        enum: ['American','Southwest','United']
    },

    flightNo:{
        type: Number,
        required:true,
        min:10,
        max:9999
    },

    departs:
    {
        type: Date,
        default: function () {
        var redate = new Date();
        redate.setFullYear(redate.getFullYear()+1)
        return redate.toLocaleDateString();}
    },
    airport:
    {
        type:String,
        enum:['AUS', 'DAL', 'LAX','SEA']
    },
    destinaions:[destinaionSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);