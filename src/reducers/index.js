import { combineReducers } from 'redux';

import booksReducer from './books';


export const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
