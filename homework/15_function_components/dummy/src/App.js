import React, { useContext } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { UserList } from './components/UserList/UserList';
import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
  const themeContext = useContext(ThemeContext);
  return (
      <div className={`App ${themeContext.darkTheme && "App_dark"}`}>
        <div className="body">
          <header>
            <Header name="Пользователи"/>
          </header>
          <main>
            <UserList/>
          </main>
        </div>
      </div>    
    );
  }

export default App;
