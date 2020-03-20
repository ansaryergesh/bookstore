/* eslint-disable react/require-default-props */
/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import createBook from '../actions/index';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <table className="bookTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
);

BookList.defaultPropTypes = {
  books: [],
};

const mapStateToProps = state => ({ books: state.books });

// const mapDispatchToProps = dispatch => bindActionCreators({ createBook, dispatch });

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(BookList);
