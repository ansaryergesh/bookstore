/* eslint-disable react/require-default-props */
/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterChange, removeBook } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, removeBook, filterChange, filter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };


  return (
    <div>
      <CategoryFilter filterChange={filterChange} />
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
          { books.map(book => (
            <Book book={book} key={book.id} removeBook={handleRemoveBook} />))}
        </tbody>
      </table>
    </div>
  );
};

BookList.defaultPropTypes = {
  books: [],
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)), filterChange: filter => dispatch(filterChange(filter)) });

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
