import React, { Component } from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import SearchBar from './SearchBar';
import './Dashboard.css';

class Dashboard extends Component {

    render(){
        return (
            <>
                <SearchBar />
                <Card interactive={true} elevation={Elevation.TWO} className="PlantCard">
                    <h2 class="bp3-heading">Plant Name</h2>
                    <p>Card content</p>
                    <Button>Submit</Button>
                </Card>
            </>
        );
    }
}
export default Dashboard;