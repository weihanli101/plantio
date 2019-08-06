const mongoose = require('mongoose');

const PlantSchema = mongoose.Schema({
    plantName : String,
}, {
    timestamps : true
});

module.exports = mongoose.model('Plant', PlantSchema);
