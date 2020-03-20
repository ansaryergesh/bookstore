/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ book }) => (
  <tr className="bookList">
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button onClick>Delete</button></td>
  </tr>
);

export default Book;
