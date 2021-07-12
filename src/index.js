import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { myAction } from './redux/actions';
import App from './components/App/App';
import 'modern-normalize/modern-normalize.css';

console.log(store);
console.log(store.getState());
console.log(store.dispatch(myAction));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
