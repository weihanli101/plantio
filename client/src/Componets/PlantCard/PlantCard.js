import React, { Component } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import API from '../../Utils/api';
import './PlantCard.css'

class PlantCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plantName : '',
            ownerID : '',
        }
    }
    async componentDidMount() {
        const plantAPI = new API({ url : 'http://localhost:1234'})
        plantAPI.createEntity({ name : 'plants'});
        const plant = await plantAPI.endpoints.plants.getOne({ id : '5d4bab82e6868d231f43f2d5'});
        this.setState({
            plantName : plant.data.plantName,
            ownerID   : plant.data.ownerID,
        });

        console.log(plant.data.plantName);
    }

    render() {
        return (
            <Card interactive={true} elevation={Elevation.TWO} className="PlantCard">
                <h2 className="bp3-heading">{ this.state.plantName }</h2>
                <p>{ this.state.ownerID }</p>
                <Button>View</Button>
            </Card>
        );
    }
}
export default PlantCard