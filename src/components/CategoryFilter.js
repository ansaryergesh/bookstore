import React from 'react';


const CategoryFilter = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select className="filterSelect">
      <option value="All">All</option>
      { categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};


export default CategoryFilter;
