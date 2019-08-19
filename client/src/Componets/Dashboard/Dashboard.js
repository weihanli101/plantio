import React, { Component } from 'react';
import SearchBarView from '../SearchBar/SearchBarView';
import PlantCard from '../PlantCard/PlantCard';

class Dashboard extends Component {

    render(){
        return (
            <>
                <SearchBarView />
                <PlantCard />
            </>
        );
    }
}
export default Dashboard;