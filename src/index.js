/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';

const generateId = () => parseInt(Math.random() * 1000, 10).toString();
const initialState = {
  books: [
    {
      id: generateId(),
      title: 'Thor Ragnarok',
      category: 'Action',
    },
    {
      id: generateId(),
      title: 'IT',
      category: 'Horror',
    },
    {
      id: generateId(),
      title: 'Tokio',
      category: 'Horror',
    },
  ],
};
const store = createStore(rootReducer, initialState);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
