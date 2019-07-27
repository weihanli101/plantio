import React, { Component } from "react";
import { inject, observer } from 'mobx-react'
import PlantCardController from '../PlantCard/PlantCardController'
import PlantCardModel from "../../Models/PlantCardModel"
import PlantCardVM from "../PlantCard/PlantCardVM"

class PlantCardProvider extends Component {
    constructor(props) {
        super(props)
        const plantCardModel = props[PlantCardModel];
        this.viewModel = new PlantCardVM(plantCardModel);
    }

    render() {
        return (
            <PlantCardController viewModel={this.viewModel}/>
        )
    }
};

PlantCardProvider = inject(PlantCardModel)(observer(PlantCardProvider));

export default PlantCardProvider;