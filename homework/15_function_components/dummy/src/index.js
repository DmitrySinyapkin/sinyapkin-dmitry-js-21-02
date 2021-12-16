import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ConfigProvider locale={ruRU}>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

