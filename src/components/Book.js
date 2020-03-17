import React from 'react';

const Book = ({book}) => (
    <tr class="bookList">
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
    </tr>
);

export default Book;