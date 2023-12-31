import React from 'react'

const ViewTable = ({ books }) => {
    // return (
    //     <div>ViewTable</div>
    // )

    return (
        <div className="table-card">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th> No.</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Country</th>
                        <th>Language</th>
                        <th>Link</th>
                        <th>Pages</th>
                        <th>Year</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books?.map((book, index) => (
                        <tr key={book.id}>
                            <td>{index + 1}</td>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.country}</td>
                            <td>{book.language}</td>
                            <td>
                                <a href='_blank' target="_blank" rel="noopener noreferrer">
                                    {book.link}
                                </a>
                            </td>
                            <td>{book.pages}</td>
                            <td>{book.year}</td>
                            <td> <i className="fas fa-edit" onClick={() => console.log(book.id)}></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewTable