import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CategoryFilter extends Component {
    handleChangeFilter = () => {

    }

    render() {
      const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
      return (
        <select className="filterSelect">
          <option value="All">All</option>
          { categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      );
    }
}
CategoryFilter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
