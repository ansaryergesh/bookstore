/* eslint-disable react/no-array-index-key */
import React from 'react';

const BooksForm = (dispatch) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="textbox" placeholder="Book Title" />
      <select className="category">
        {
                  categories.map((val, index) => (
                    <option key={index} value={val}>{val}</option>
                  ))
                }
      </select>
      <button
        type="submit"
        onClick={() => dispatch({
          type: 'CREATE_BOOK',
        })}
      >
Submit
      </button>
    </form>
  );
};

export default BooksForm;
