import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';

const BookList = ({books}) => (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {books.map(book => (
                <Book key ={book.id} book= {book} />
            ))}
        </tbody>
    </table>
);

BookList.defaultPropTypes = {
    books: [],
}

const mapStateToProps = state => ({books: state.books});

export default connect(mapStateToProps)(BookList);