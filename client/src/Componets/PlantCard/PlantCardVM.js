class PlantCardVM {
    constructor(plantModel) {
        this.plantModel = plantModel;
    }

    getPlantName() {
        return this.plantModel.getPlantName();
    }

    getPlantDescription() {
        return this.plantModel.getPlantDescription();
    }
};

export default PlantCardVM;