const mongoose = require('mongoose');

const PotSchema = mongoose.Schema({
    uuid           : String,
    humidity       : Number,
    soilMoisture   : Number,
    lightIntensity : Number,
    airTempeture   : Number,
    waterLevel     : Number,
}, {
    timestamps : true
});

module.exports = mongoose.model('Pot', PotSchema);
