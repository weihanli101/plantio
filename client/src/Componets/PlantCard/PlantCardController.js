import React, { Componet } from 'react';
import PlantCardView from './PlantCardView';

class PlantCardController extends Componet {
    render() {
        const {viewModel } = this.props
        return (
            <PlantCardView
                plantName={viewModel.getPlantName()}
                plantDescription={viewModel.getPlantDescription()}
            />
        )
    }
}
export default PlantCardController