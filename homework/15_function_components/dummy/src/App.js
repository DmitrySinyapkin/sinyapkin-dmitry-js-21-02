import React, { useContext } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { UserList } from './forms/UserList/UserList';
import { ThemeContext } from './contexts/ThemeContext';
import { HashRouter} from 'react-router-dom';

const App = () => {
  const themeContext = useContext(ThemeContext);
  return (
      <HashRouter>
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
      </HashRouter>    
    );
  }

export default App;
