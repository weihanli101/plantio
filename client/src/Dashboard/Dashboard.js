import React, { Component } from 'react';
import SearchBar from './SearchBar';
import PlantCard from './PlantCard';

import './Dashboard.css';

class Dashboard extends Component {

    render(){
        return (
            <>
                <SearchBar />
                <PlantCard />
            </>
        );
    }
}
export default Dashboard;