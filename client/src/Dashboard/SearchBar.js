import React, { Component } from 'react';
import './SearchBar.css';
import { InputGroup } from '@blueprintjs/core';

class SearchBar extends Component {
    render() {
        return (
            <InputGroup 
                className="MasterSearchBar"
                large={true}
                placeholder="Add people or groups..."
                round={true}
                leftIcon="search"
            />
        );
    }
}

export default SearchBar;
