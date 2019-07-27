import React, { Component } from 'react';
import SearchBarView from '../SearchBar/SearchBarView';
import PlantCardView from '../PlantCard/PlantCardView';

import './DashboardView.css';

class DashboardView extends Component {

    render(){
        return (
            <>
                <SearchBarView />
                <PlantCardView />
            </>
        );
    }
}
export default DashboardView;