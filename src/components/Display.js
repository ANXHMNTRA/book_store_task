import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayBooks } from '../actions';
import ViewTable from './ViewTable';
import SearchBar from './SearchBar';

function Display() {
    const [books, setBooks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [sortOrder, setSortOrder] = useState('') //order => DESC / ASC
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
