import React, { useState } from 'react';
import "../style/searchBar.css"

const SearchBar = ({ onSearch, onAddBook, toggleSortButton, setSortOrder, sortOrder }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Search by Title."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch}> <i className='fa fa-search' />  Search </button>
            <button onClick={toggleSortButton}> {sortOrder ? <i className="fa-solid fa-sort-up"></i> : <i className="fa-solid fa-sort-down" />} Sort </button>
            <button className='add-book-button' onClick={onAddBook}>  <i className='fa fa-plus' /> Book </button>

        </div>
    );
};

export default SearchBar;
