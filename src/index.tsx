import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
  <Auth0ProviderWithHistory>
    <Provider store={store}>
    <App />
    </Provider>
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
