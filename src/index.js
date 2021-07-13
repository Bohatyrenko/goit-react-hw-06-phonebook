import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { myAction } from './redux/actions';
import App from './components/App/App';
import 'modern-normalize/modern-normalize.css';

console.log(store);
console.log(store.getState());
console.log(store.dispatch(myAction));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
