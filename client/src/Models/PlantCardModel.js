import { observable, decorate } from 'mobx'

class PlantCardModel {
    plantName = 'TEST PLANT NAME TODO GET FROM API';
    plantDescription = 'Placeholder discription';
    
    getPlantName() {
        return this.plantName;
    }

    getPlantDescription() {
        return this.plantDescription;
    }
};
decorate(PlantCardModel, {
    plantName : observable,
    plantDescription : observable,
});

export default PlantCardModel;