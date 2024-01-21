import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';
//Provider hace que toda la aplicacion pueda usar el store
import { Provider } from 'react-redux';
import store from './components/redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
