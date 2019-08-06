import React, { Component } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import './PlantCardView.css'

class PlantCardView extends Component {

    async componentDidMount() {
        const result = await fetch('')
    }

    render() {
        const {
            plantName,
            plantDescription,
        } = this.props;
        return (
            <Card interactive={true} elevation={Elevation.TWO} className="PlantCard">
                <h2 className="bp3-heading">{ plantName }</h2>
                <p>{ plantDescription }</p>
                <Button>View</Button>
            </Card>
        );
    }
}
export default PlantCardView