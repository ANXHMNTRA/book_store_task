import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayBooks } from '../actions';
import ViewTable from './ViewTable';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import ReactPaginate from 'react-paginate';
import '../style/pagination.css'


function Display() {
    const [books, setBooks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(25)
    const [sortOrder, setSortOrder] = useState(false) //order => DESC-false / ASC-true
    const [loaderActive, setLoaderActive] = useState(false)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber.selected + 1);
    };
    console.log("--------", currentPage);
    const dispatch = useDispatch()
    const data = useSelector(state => state.BooksDataReducer.data)
    const pagination = useSelector(state => state.BooksDataReducer.pagination)
    // console.log("---<><><><>---", pagination);

    // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handleSearchBar = (searchValue) => {
        console.log(searchValue)
    }
    const handleAddButton = () => {

    }

    const toggleSortButton = () => setSortOrder(!sortOrder)

    const url = "/"
    //   var url = `/production-office/${production_office_info_id}/video`


    const getUrl = ( page,  sortBy, order) => {
        // list of video in a movie /series 
        let sendSortBy = ''
        let sendOrder = ''

        if (sortBy) {
            sendSortBy = "&sortBy=" + sortBy
        }
        if (order) {
            sendOrder = "&order=" + order
        }
        return `/video?page=` + page + "&limit="  + sendSortBy + sendOrder

    }
    useEffect(() => {
        dispatch(displayBooks()).then(res => {
            console.log("res in effect in then ", res)
            if (res.status === 200) {
                console.log("===", res.data);
            }
            // setBooks(res.data.data)
        })
    }, [])

    return (
        <div>
            <SearchBar
                onAddBook={handleAddButton}
                toggleSortButton={toggleSortButton}
                onSearch={handleSearchBar}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder} />
            {data && <ViewTable books={data} />}
            <div className='pagination-container'>
                {pagination && < ReactPaginate
                    breakLabel="..."
                    nextLabel=" >"
                    onPageChange={handlePageChange}
                    pageRangeDisplayed={5}
                    pageCount={pagination.totalPages}
                    previousLabel="< "
                    renderOnZeroPageCount={null}
                    activeClassName="active"

                />}
                {/*    < Pagination
                    currentPage={pagination.currentPage}
                    // totalPages={Math.ceil(data.length / itemsPerPage)}
                    totalPages={pagination.totalPages}
                    maxVisibleButtons={4}
                    onPageChange={handlePageChange}
                /> */}


            </div>

        </div>
    )
}

export default Display;
