import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { VFXProvider } from 'react-vfx'
import store from './store';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <VFXProvider>
      <App />
    </VFXProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
