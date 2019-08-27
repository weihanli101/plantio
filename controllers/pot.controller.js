const Pot = require('../models/pot.model');

exports.create = async (req, res) => {
    //TODO: validation for plant object
    const pot = new Pot({
        uuid           : req.body.uuid,
        humidity       : req.body.humidity,
        soilMoisture   : req.body.soilMoisture,
        lightIntensity : req.body.lightIntensity,
        airTempeture   : req.body.airTempeture,
        waterLevel     : req.body.waterLevel,
    });

    try {
        const result = await pot.save();
        res.send(result);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || 'An error occured creating the pot data.'
        })
    }
};

exports.update = async (req, res) => {
    try {
        // TODO: validation for updating the pot object
        const pot = await Pot.findOneAndUpdate({ uuid : req.body.uuid }, {
            uuid           : req.body.uuid,
            humidity       : req.body.humidity,
            soilMoisture   : req.body.soilMoisture,
            lightIntensity : req.body.lightIntensity,
            airTempeture   : req.body.airTempeture,
            waterLevel     : req.body.waterLevel,
        }, { new: true });
        res.send(pot);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || 'An error occured updating the pot data.'
        })
    }
}