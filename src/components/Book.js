/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import './Book.scss';
import loader from './loader.png';

const Book = ({ book, removeBook }) => {
  const handleRemoveBook = () => {
    removeBook(book);
  };

  return (
    <div className="books-Block">
      <p className="bookCategory">{book.category}</p>
      <h2 className="bookTitle">{book.title}</h2>
      <p className="bookAuthor">Suzanne Collins</p>
      <div className="bookButtons">
        <button className="comment" type="submit">
          Comments
        </button>
        <button className="remove" type="submit" onClick={handleRemoveBook}>
          Remove
        </button>
        <button className="edit" type="submit">
          Edit
        </button>
      </div>

      <div className="books-Other">
        <img src={loader} alt="Loader" />
        <div className="info-1">
          <p className="percent">65%</p>
          <p className="status">completed</p>
        </div>
        <div>
          <div className="info-2">
            <p className="current">CURRENT CHAPTER</p>
            <p className="chapter">CHAPTER 17</p>
          </div>
          <p className="btnProgress">UPDATE PROGRESS</p>
        </div>
      </div>
    </div>
  );
};


export default Book;
