import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';

const generateId = () => parseInt(Math.random() *1000);
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
}
const store = createStore(rootReducer,initialState);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
