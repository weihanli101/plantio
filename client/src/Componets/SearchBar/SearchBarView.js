import React, { Component } from 'react';
import { InputGroup } from '@blueprintjs/core';
import './SearchBarView.css';

class SearchBar extends Component {
    render() {
        return (
            <InputGroup 
                className="MasterSearchBar"
                large={true}
                placeholder="Search..."
                round={true}
                leftIcon="search"
            />
        );
    }
}

export default SearchBar;
