const Plant = require('../models/plant.model');;

exports.create = async (req, res) => {
    //TODO: validation for plant object
    const plant = new Plant({
        plantName : req.body.plantName,
    });

    try {
        const result = await plant.save();
        res.send(result);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || 'An error occured while saving the plant.'
        })
    }
};

exports.findOne = async (req, res) => {
    console.log('findONe hit');
    try {
        const plant = await Plant.findOne(req.params.id);
        if (!plant) {
            return res.status(404).send({
                message: `Plant not found with ID: ${req.params.id}`
            });
        }
        console.log('Plant: ', plant);
        res.send(plant);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            message: `Error fetching plant with ID: ${req.params.id}`
        });
    }
}