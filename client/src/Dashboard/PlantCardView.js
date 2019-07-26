import React, { Component } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import './PlantCardView.css'

class PlantCardView extends Component {
    render() {
        return (
            <Card interactive={true} elevation={Elevation.TWO} className="PlantCard">
                <h2 className="bp3-heading">Plant Name</h2>
                <p>Card content</p>
                <Button>Submit</Button>
            </Card>
        );
    }
}
export default PlantCardView