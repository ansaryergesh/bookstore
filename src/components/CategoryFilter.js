import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CategoryFilter = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const { filterChange, filter } = props;
  return (
    <select
      className="filterSelect"
      onChange={filterChange}
      value={filter}
    >
      <option value="All">All</option>
      { categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};


export default CategoryFilter;
