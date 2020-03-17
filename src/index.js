import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
