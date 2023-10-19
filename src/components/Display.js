import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayBooks } from '../actions';
import ViewTable from './ViewTable';
import SearchBar from './SearchBar';

function Display() {
    const [books, setBooks] = useState([
        {
            "author": "zsdvzd",
            "country": "sdasfasf",
            "language": "afewafszd",
            "link": "cxvxcvx",
            "pages": "334",
            "title": "thejas911",
            "year": "vzsv",
            "id": 667
        }])
    const [loaderActive, setLoaderActive] = useState(false)

    const dispatch = useDispatch()
    const data = useSelector(state => state.BooksDataReducer.data)

    const handleSearchBar = (searchValue) => {
        console.log(searchValue)
    }
    const handleAddButton = () => {

    }
    useEffect(() => {
        dispatch(displayBooks()).then(res => {
            console.log("res in effect in then ", res)
            // setBooks(res.data.data)
        })
    }, [])


    return (
        <div>
            <SearchBar onAddBook={handleAddButton} onSearch={handleSearchBar} />
            {data && <ViewTable books={data} />}
        </div>
    )
}

export default Display;
