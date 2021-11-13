import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ConfigProvider locale={ruRU}>
        <App />
      </ConfigProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

