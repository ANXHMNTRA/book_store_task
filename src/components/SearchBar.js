import React, { useState } from 'react';
import "../style/searchBar.css"

const SearchBar = ({ onSearch, onAddBook }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch}> <i className='fa fa-search' />  Search </button>
            <button onClick={onAddBook}>  <i className='fa fa-plus' /> Book </button>
        </div>
    );
};

export default SearchBar;
