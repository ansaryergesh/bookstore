/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const generateId = () => parseInt(Math.random() * 1000, 10).toString();

class BooksForm extends Component {
  state = {
    title: '',
    category: '',
  }

  handleChange(e) {
    this.setState = ({ [e.target.id]: e.target.value });
  }


  render() {
    const { title, category } = this.state;
    return (
      <form>
        <input type="textbox" name="title" value={title} placeholder="Book Title" onChange={this.handleChange} />
        <select className="category" name="category" value={category} onChange={this.handleChange}>
          {
                  categories.map((val, index) => (
                    <option key={index} value={val}>{val}</option>
                  ))
                }
        </select>
        <button
          type="submit"
        >
Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
