import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { fetchApartmentsAction } from './store/apartments-data-process/apartments-data-process';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

store.dispatch(fetchApartmentsAction());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
);
