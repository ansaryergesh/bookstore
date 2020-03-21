/* eslint-disable react/require-default-props */
/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, filterChange } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, removeBook, filterChange, filter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    filterChange(filter);
  };

  const filterBooks = filter => {
    if (filter === 'All') {
      return books;
    }
    const filtered = books.filter(book => book.category === filter);
    return filtered;
  };


  return (
    <div>
      <CategoryFilter />
      <table className="bookTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterBooks.map(book => (
            <Book key={book.id} book={book} removeBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BookList.defaultPropTypes = {
  books: [],
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
