const Plant = require('../models/plant.model');

exports.create = async (req, res) => {
    //TODO: validation for plant object
    const plant = new Plant({
        plantName : req.body.plantName,
        ownerID   : req.body.ownerID,
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
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).send({
                message: `Plant not found with ID: ${req.params.id}`
            });
        }
        res.send(plant);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            message: `Error fetching plant with ID: ${req.params.id}`
        });
    }
}

exports.findAllUserPlants = async (req, res) => {
    console.log(req.params);
    try {
        const plants = await Plant.find({ ownerID : req.params.id });
        if (!plants) {
            return res.status(404).send({
                message: `User ${req.params.id} has no plants.`
            });
        }
        res.send(plants);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            message: `Error fetching plants for user ${req.params.id}`
        });
    }
}