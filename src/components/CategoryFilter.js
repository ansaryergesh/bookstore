import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CategoryFilter extends Component {
  constructor() {
    super();
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  handleChangeFilter(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <select
        className="filterSelect"
        onChange={this.handleChangeFilter}
      >
        <option value="All">All</option>
        { categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    );
  }
}


export default CategoryFilter;
