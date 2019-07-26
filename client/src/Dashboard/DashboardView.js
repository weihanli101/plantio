import React, { Component } from 'react';
import SearchBarView from './SearchBarView';
import PlantCardView from './PlantCardView';

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