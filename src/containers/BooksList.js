/* eslint-disable react/require-default-props */
/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { filterChange, removeBook } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, removeBook, filter, filterChange,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const booksFilter = filter => {
    if (filter === 'All') {
      return books;
    }
    const opt = books.filter(val => val.category === filter);
    return opt;
  };

  return (
    <div>
      <div className="Header">
        <div className="leftBlock">
          <h1>Bookstore CMS</h1>
          <p>Books</p>
          <CategoryFilter filterChange={filterChange} />
        </div>
        <div className="rightBlock">
          <div className="userLogo">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
      <div className="bookLists">

        <div className="bookSection">
          { booksFilter(filter).map(book => (
            <Book book={book} key={book.id} removeBook={handleRemoveBook} />))}
        </div>
      </div>
    </div>
  );
};

BookList.defaultPropTypes = {
  books: [],
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  filterChange: filter => dispatch(filterChange(filter)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
