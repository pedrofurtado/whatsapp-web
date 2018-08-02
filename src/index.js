import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store.js';

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

registerServiceWorker();
