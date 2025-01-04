import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './State/store';
import { ToastContainer } from 'react-toastify';

// Render the app using React DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer/>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
