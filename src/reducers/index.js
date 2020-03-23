import { combineReducers } from 'redux';

import booksReducer from './books';
import filterReducre from './filter';


export const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducre,
});

export default rootReducer;
