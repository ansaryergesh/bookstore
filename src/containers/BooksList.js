/* eslint-disable react/require-default-props */
/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, filterChange } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    filterChange(filter);
  };

  return (
    <div>
       <CategoryFilter filterCategory={filterCategory} />
    </div>
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
        {books.map(book => (
          <Book key={book.id} book={book} removeBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

BookList.defaultPropTypes = {
  books: [],
};

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
