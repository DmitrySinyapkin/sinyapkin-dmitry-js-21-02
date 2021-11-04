import React, { useContext } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { UserList } from './forms/UserList/UserList';
import { ThemeContext } from './contexts/ThemeContext';
import { HashRouter, Routes, Route } from 'react-router-dom';
import UserPage from './forms/UserPage/UserPage';

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
              <Routes>
                <Route exact path={'/'} element={<UserList/>}/>
                <Route path={'/:id'} element={<UserPage/>}/>
              </Routes>
            </main>
          </div>
        </div>
      </HashRouter>    
    );
  }

export default App;
