import React from 'react';

const BooksForm = (dispatch) => {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
        <form>
            <input type="textbox" placeholder="Book Title"></input>
            <select className="category">
                <option value = "Select Category" selected></option>
                { 
                  categories.map((val,index)=> (
                      <option key={index} value={val}>{val}</option>
                  ))
                }
            </select>
            <button type="submit" onClick={() => dispatch({
                type: 'CREATE_BOOK',
            })}>Submit</button>
        </form>
    );
};

export default BooksForm;