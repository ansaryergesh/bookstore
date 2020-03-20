/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ book, removeBook }) => {
  const handleRemoveBook = () => {
    removeBook(book);
  };

  return (
    <tr className="bookList">
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button onClick={handleRemoveBook}>Delete</button></td>
    </tr>
  );
};


export default Book;
