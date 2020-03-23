import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filterChange }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const handleFilterChange = (event) => {
    filterChange(event.target.value);
  };
  return (
    <select
      className="filterSelect"
      onChange={handleFilterChange}
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
